import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Toast } from "../../components/common/Toast";
import { useToast } from "../../hooks/useToast";
import { fetchLatestFeedbacks, submitFeedback } from "../../services/api";
import { Button } from "../../components/ui/button";
import { FeedbackCard } from "../../components/ui/FeedbackCard";
import { FormInput, FormTextarea, FormField } from "../../components/ui/form-field";
import { cn } from "../../lib/utils";

interface FeedbackEntry {
  id: number;
  name: string;
  comment: string;
  stars: number;
}

const STAR_VALUES = [1, 2, 3, 4, 5] as const;

export function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<FeedbackEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [ratingError, setRatingError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [commentError, setCommentError] = useState<string | null>(null);
  const { toast, showToast, hideToast } = useToast();

  useEffect(() => {
    const loadFeedbacks = async () => {
      try {
        setIsLoading(true);
        const data = await fetchLatestFeedbacks(6);
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
    setHoveredRating(null);
    setRatingError(null);
    setNameError(null);
    setCommentError(null);
  };

  const validateForm = (): boolean => {
    let isValid = true;

    if (!name.trim()) {
      setNameError("Nome é obrigatório");
      isValid = false;
    } else {
      setNameError(null);
    }

    if (!comment.trim()) {
      setCommentError("Comentário é obrigatório");
      isValid = false;
    } else {
      setCommentError(null);
    }

    if (rating === null) {
      setRatingError("Selecione pelo menos uma estrela.");
      isValid = false;
    } else {
      setRatingError(null);
    }

    return isValid;
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (nameError) {
      setNameError(null);
    }
  };

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
    if (commentError) {
      setCommentError(null);
    }
  };

  const handleRatingChange = (value: number) => {
    setRating(value);
    if (ratingError) {
      setRatingError(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      showToast({
        title: "Erro de validação",
        message: "Por favor, preencha todos os campos obrigatórios corretamente.",
        variant: "error",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await submitFeedback({
        name: name.trim(),
        comment: comment.trim(),
        stars: rating!,
      });
      showToast({
        title: "Feedback Enviado!",
        message: "Obrigado pelo seu feedback. Ele foi enviado com sucesso!",
        variant: "success",
      });
      resetForm();
      const updated = await fetchLatestFeedbacks(6);
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
    <div className="mx-auto max-w-6xl px-4 py-8 text-brand-lightText sm:px-6 sm:py-12 md:px-8 md:py-16 dark:text-brand-darkText">
      <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-light backdrop-blur-md dark:border-white/10 dark:bg-white/10 sm:rounded-3xl sm:p-8 md:p-12">
        <header className="space-y-2 text-center sm:space-y-3 md:text-left">
          <h1 className="text-2xl font-bold uppercase tracking-[0.2rem] text-brand-primary sm:text-3xl sm:tracking-[0.3rem] md:text-4xl md:tracking-[0.4rem] lg:text-5xl">
            Feedbacks 🤖
          </h1>
          <p className="text-sm text-brand-lightTextMuted sm:text-base md:text-lg dark:text-brand-darkTextMuted">
            Veja o que outros participantes disseram sobre nossa oficina e deixe
            seu próprio feedback.
          </p>
        </header>

        <section className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:mt-12 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-brand-accent sm:text-2xl">
                  Depoimentos dos participantes
                </h2>
              </div>
            </div>

            {isLoading ? (
              <div className="mt-6 flex flex-col items-center justify-center gap-4 rounded-2xl border border-black/10 bg-brand-lightBgSecondary p-6 text-center text-brand-lightTextMuted shadow-light sm:mt-10 sm:rounded-3xl sm:p-10 dark:border-white/20 dark:bg-brand-darkBgSecondary/60 dark:text-brand-darkTextMuted">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-primary/40 border-t-brand-primary sm:h-12 sm:w-12" />
                <p className="text-sm sm:text-base">Carregando depoimentos...</p>
              </div>
            ) : (
              <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 sm:grid-cols-2">
                {feedbacks.map((entry) => (
                  <FeedbackCard key={entry.id} {...entry} />
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

          <div className="rounded-2xl border border-black/10 bg-brand-lightBgSecondary p-5 shadow-light sm:rounded-3xl sm:p-6 dark:border-white/20 dark:bg-brand-darkBgSecondary/60">
            <h2 className="text-xl font-semibold text-brand-accent sm:text-2xl">
              Deixe seu feedback
            </h2>
            <p className="mt-2 text-xs text-brand-lightTextMuted sm:text-sm dark:text-brand-darkTextMuted">
              Avalie nossa oficina e deixe sua impressão marcada, para que
              possamos analisar e melhorar o desenvolvimento de projetos
              futuros.
            </p>

            <form className="mt-4 space-y-4 sm:mt-6 sm:space-y-6" onSubmit={handleSubmit}>
              <FormInput
                id="userName"
                name="userName"
                type="text"
                label="Nome"
                required
                placeholder="Digite seu nome completo"
                value={name}
                onChange={handleNameChange}
                error={nameError || undefined}
              />

              <FormField
                label="Avaliação"
                id="rating"
                required
                error={ratingError || undefined}
              >
                <div
                  className="flex items-center gap-1 sm:gap-2"
                  onMouseLeave={() => setHoveredRating(null)}
                >
                  {STAR_VALUES.map((value) => {
                    const isSelected = rating !== null && value <= rating;
                    const isHovered = hoveredRating !== null && value <= hoveredRating;
                    const shouldHighlight = isSelected || isHovered;

                    return (
                      <label
                        key={value}
                        className="flex cursor-pointer flex-col items-center"
                        onMouseEnter={() => setHoveredRating(value)}
                      >
                        <input
                          className="peer sr-only"
                          type="radio"
                          name="rating"
                          value={value}
                          required
                          checked={rating === value}
                          onChange={() => handleRatingChange(value)}
                          aria-invalid={!!ratingError}
                        />
                        <span
                          className={cn(
                            "text-xl transition sm:text-2xl",
                            shouldHighlight
                              ? "text-feedback-star"
                              : "text-brand-lightTextMuted dark:text-brand-darkTextMuted"
                          )}
                        >
                          ★
                        </span>
                        <span className="mt-0.5 text-[10px] text-brand-lightTextMuted sm:mt-1 sm:text-xs dark:text-brand-darkTextMuted">
                          {value}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </FormField>

              <FormTextarea
                id="comment"
                name="comment"
                label="Comentário"
                required
                rows={4}
                placeholder="Conte-nos sobre sua experiência na oficina..."
                value={comment}
                onChange={handleCommentChange}
                error={commentError || undefined}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar feedback"}
              </Button>
            </form>
          </div>
        </section>
      </div>

      <Toast toast={toast} onClose={hideToast} />
    </div>
  );
}

