import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Toast } from "../../components/common/Toast";
import { useToast } from "../../hooks/useToast";
import { submitContact } from "../../services/api";

export function ContactPage() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast, showToast, hideToast } = useToast();

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsSubmitting(true);
      await submitContact({
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        subject: formValues.subject.trim(),
        message: formValues.message.trim(),
      });
      showToast({
        title: "Mensagem enviada!",
        message: "Obrigado pelo contato. Responderemos em breve.",
        variant: "success",
      });
      resetForm();
    } catch (error) {
      showToast({
        title: "Erro",
        message:
          error instanceof Error
            ? error.message
            : "Erro ao enviar mensagem. Tente novamente.",
        variant: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 text-brand-lightText md:px-8 dark:text-brand-darkText">
      <div className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-light backdrop-blur-md dark:border-white/10 dark:bg-white/10 md:p-12">
        <header className="space-y-3 text-center md:text-left">
          <h1 className="text-4xl font-bold uppercase tracking-[0.4rem] text-brand-primary">
            Fale Conosco 📬
          </h1>
          <p className="text-lg text-brand-lightTextMuted dark:text-brand-darkTextMuted">
            Entre em contato conosco para tirar dúvidas, fazer sugestões ou
            solicitar informações sobre nossos projetos.
          </p>
        </header>

        <form className="mt-10 grid gap-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-brand-primary"
            >
              Nome *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Digite seu nome completo"
              value={formValues.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-brand-lightText shadow-light transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40 dark:border-white/10 dark:bg-white/60 dark:text-brand-darkText"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-brand-primary"
            >
              E-mail *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Digite seu e-mail válido"
              value={formValues.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-brand-lightText shadow-light transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40 dark:border-white/10 dark:bg-white/60 dark:text-brand-darkText"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm font-semibold text-brand-primary"
            >
              Assunto *
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Digite o assunto da sua mensagem"
              value={formValues.subject}
              onChange={handleChange}
              className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-brand-lightText shadow-light transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40 dark:border-white/10 dark:bg-white/60 dark:text-brand-darkText"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-brand-primary"
            >
              Mensagem *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Escreva sua mensagem aqui..."
              value={formValues.message}
              onChange={handleChange}
              className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-brand-lightText shadow-light transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40 dark:border-white/10 dark:bg-white/60 dark:text-brand-darkText"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full rounded-full bg-brand-primary px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white shadow-light transition hover:bg-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:opacity-50"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
          </button>
        </form>
      </div>

      <Toast toast={toast} onClose={hideToast} />
    </div>
  );
}

