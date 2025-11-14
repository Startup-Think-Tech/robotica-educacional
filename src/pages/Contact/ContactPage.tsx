import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Toast } from "../../components/common/Toast";
import { useToast } from "../../hooks/useToast";
import { submitContact } from "../../services/api";
import { Button } from "../../components/ui/button";
import { FormInput, FormTextarea } from "../../components/ui/form-field";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactPage() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast, showToast, hideToast } = useToast();

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formValues.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formValues.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
      newErrors.email = "E-mail inválido";
    }

    if (!formValues.subject.trim()) {
      newErrors.subject = "Assunto é obrigatório";
    }

    if (!formValues.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
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
    <div className="mx-auto max-w-5xl px-4 py-8 text-brand-lightText sm:px-6 sm:py-12 md:px-8 md:py-16 dark:text-brand-darkText">
      <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-light backdrop-blur-md dark:border-white/10 dark:bg-white/10 sm:rounded-3xl sm:p-8 md:p-12">
        <header className="space-y-2 text-center sm:space-y-3 md:text-left">
          <h1 className="text-2xl font-bold uppercase tracking-[0.2rem] text-brand-primary sm:text-3xl sm:tracking-[0.3rem] md:text-4xl md:tracking-[0.4rem]">
            Fale Conosco 📬
          </h1>
          <p className="text-sm text-brand-lightTextMuted sm:text-base md:text-lg dark:text-brand-darkTextMuted">
            Entre em contato conosco para tirar dúvidas, fazer sugestões ou
            solicitar informações sobre nossos projetos.
          </p>
        </header>

        <form className="mt-6 grid gap-4 sm:mt-10 sm:gap-6" onSubmit={handleSubmit}>
          <FormInput
            id="name"
            name="name"
            type="text"
            label="Nome"
            required
            placeholder="Digite seu nome completo"
            value={formValues.name}
            onChange={handleChange}
            error={errors.name}
          />

          <FormInput
            id="email"
            name="email"
            type="email"
            label="E-mail"
            required
            placeholder="Digite seu e-mail válido"
            value={formValues.email}
            onChange={handleChange}
            error={errors.email}
          />

          <FormInput
            id="subject"
            name="subject"
            type="text"
            label="Assunto"
            required
            placeholder="Digite o assunto da sua mensagem"
            value={formValues.subject}
            onChange={handleChange}
            error={errors.subject}
          />

          <FormTextarea
            id="message"
            name="message"
            label="Mensagem"
            required
            rows={4}
            placeholder="Escreva sua mensagem aqui..."
            value={formValues.message}
            onChange={handleChange}
            error={errors.message}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-4"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
          </Button>
        </form>
      </div>

      <Toast toast={toast} onClose={hideToast} />
    </div>
  );
}

