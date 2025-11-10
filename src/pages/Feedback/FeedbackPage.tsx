import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Toast } from "../../components/common/Toast";
import { useToast } from "../../hooks/useToast";
import { fetchLatestFeedbacks, submitFeedback } from "../../services/api";

interface FeedbackEntry {
  id: number;
  name: string;
  comment: string;
  stars: number;
}

const STAR_VALUES = [5, 4, 3, 2, 1] as const;

export function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<FeedbackEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [ratingError, setRatingError] = useState<string | null>(null);
  const { toast, showToast, hideToast } = useToast();

  useEffect(() => {
    const loadFeedbacks = async () => {
      try {
        setIsLoading(true);
        const data = await fetchLatestFeedbacks(4);
        setFeedbacks(data);
      } catch (error) {
        showToast({
          title: "Erro",
          message:
            error instanceof Error
              ? error.message
              : "Não foi possível carregar os feedbacks.",
          variant: "error",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadFeedbacks();
  }, [showToast]);

  const resetForm = () => {
    setName("");
    setComment("");
    setRating(null);
    setRatingError(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (rating === null) {
      setRatingError("Selecione pelo menos uma estrela.");
      return;
    }

    try {
      setIsSubmitting(true);
      await submitFeedback({
        name: name.trim(),
        comment: comment.trim(),
        stars: rating,
      });
      showToast({
        title: "Feedback Enviado!",
        message: "Obrigado pelo seu feedback. Ele foi enviado com sucesso!",
        variant: "success",
      });
      resetForm();
      const updated = await fetchLatestFeedbacks(4);
      setFeedbacks(updated);
    } catch (error) {
      showToast({
        title: "Erro",
        message:
          error instanceof Error
            ? error.message
            : "Erro ao enviar feedback. Tente novamente.",
        variant: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-brand-lightText md:px-8 dark:text-brand-darkText">
      <div className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-light backdrop-blur-md dark:border-white/10 dark:bg-white/10 md:p-12">
        <header className="space-y-3 text-center md:text-left">
          <h1 className="text-4xl font-bold uppercase tracking-[0.4rem] text-brand-primary md:text-5xl">
            Feedbacks 🤖
          </h1>
          <p className="text-lg text-brand-lightTextMuted dark:text-brand-darkTextMuted">
            Veja o que outros participantes disseram sobre nossa oficina e deixe
            seu próprio feedback.
          </p>
        </header>

        <section className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-brand-accent">
                  Depoimentos dos participantes
                </h2>
              </div>
            </div>

            {isLoading ? (
              <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-3xl border border-black/10 bg-brand-lightBgSecondary p-10 text-center text-brand-lightTextMuted shadow-light dark:border-white/20 dark:bg-brand-darkBgSecondary/60 dark:text-brand-darkTextMuted">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-primary/40 border-t-brand-primary" />
                <p>Carregando depoimentos...</p>
              </div>
            ) : (
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {feedbacks.map((entry) => (
                  <article
                    key={entry.id}
                    className="rounded-2xl border border-black/10 bg-brand-lightBgSecondary p-6 shadow-light transition hover:-translate-y-1 hover:shadow-medium dark:border-white/20 dark:bg-brand-darkBgSecondary/60"
                  >
                    <header className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-primary/40 bg-brand-primary/10 text-brand-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="h-6 w-6"
                          aria-hidden
                        >
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-primary">
                          {entry.name}
                        </h3>
                        <div className="flex items-center gap-1 text-feedback-star">
                          {Array.from({ length: 5 }, (_, index) => (
                            <span key={index} aria-hidden>
                              {index < entry.stars ? "★" : "☆"}
                            </span>
                          ))}
                        </div>
                      </div>
                    </header>
                    <p className="mt-4 text-sm leading-relaxed text-brand-lightTextMuted dark:text-brand-darkTextMuted">
                      “{entry.comment}”
                    </p>
                  </article>
                ))}
                {!feedbacks.length && (
                  <p className="col-span-full rounded-2xl border border-brand-primary/20 bg-brand-primary/10 p-6 text-center text-sm text-brand-primary dark:border-white/20 dark:bg-brand-darkBgSecondary/60 dark:text-brand-darkTextMuted">
                    Ainda não temos feedbacks cadastrados. Seja o primeiro a
                    compartilhar a sua experiência!
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-black/10 bg-brand-lightBgSecondary p-6 shadow-light dark:border-white/20 dark:bg-brand-darkBgSecondary/60">
            <h2 className="text-2xl font-semibold text-brand-accent">
              Deixe seu feedback
            </h2>
            <p className="mt-2 text-sm text-brand-lightTextMuted dark:text-brand-darkTextMuted">
              Avalie nossa oficina e deixe sua impressão marcada, para que
              possamos analisar e melhorar o desenvolvimento de projetos
              futuros.
            </p>

            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="userName"
                  className="text-sm font-semibold text-brand-primary"
                >
                  Nome *
                </label>
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  required
                  placeholder="Digite seu nome completo"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-brand-lightText shadow-light transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40 dark:border-white/10 dark:bg-white/60 dark:text-brand-darkText"
                />
              </div>

              <div className="space-y-2">
                <span className="text-sm font-semibold text-brand-primary">
                  Avaliação *
                </span>
                <div className="flex items-center gap-2">
                  {STAR_VALUES.map((value) => (
                    <label
                      key={value}
                      className="flex cursor-pointer flex-col items-center"
                    >
                      <input
                        className="peer sr-only"
                        type="radio"
                        name="rating"
                        value={value}
                        required
                        checked={rating === value}
                        onChange={() => {
                          setRating(value);
                          setRatingError(null);
                        }}
                      />
                      <span className="text-2xl transition peer-checked:text-feedback-star">
                        ★
                      </span>
                      <span className="mt-1 text-xs text-brand-lightTextMuted dark:text-brand-darkTextMuted">
                        {value}
                      </span>
                    </label>
                  ))}
                </div>
                {ratingError && (
                  <p className="text-xs font-medium text-feedback-errorText">
                    {ratingError}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="comment"
                  className="text-sm font-semibold text-brand-primary"
                >
                  Comentário *
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  required
                  placeholder="Conte-nos sobre sua experiência na oficina..."
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-brand-lightText shadow-light transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40 dark:border-white/10 dark:bg-white/60 dark:text-brand-darkText"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-brand-primary px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white shadow-light transition hover:bg-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Enviar feedback"}
              </button>
            </form>
          </div>
        </section>
      </div>

      <Toast toast={toast} onClose={hideToast} />
    </div>
  );
}

