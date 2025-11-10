const API_BASE_URL = import.meta.env.VITE_API_URL?.trim();

function buildEndpoint(path: string) {
  if (!API_BASE_URL) {
    throw new Error(
      "VITE_API_URL não configurado. Ajuste seu arquivo .env para habilitar as requisições."
    );
  }
  return `${API_BASE_URL}${path}`;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

interface FeedbackDto {
  id: number;
  name: string;
  comment: string;
  stars: number;
  created_at?: string;
}

export async function fetchLatestFeedbacks(limit = 4): Promise<FeedbackDto[]> {
  const endpoint = buildEndpoint("/feedbacks");
  const response = await fetch(endpoint);
  const text = await response.text();

  if (!response.ok) {
    throw new Error("Não foi possível carregar os feedbacks.");
  }

  const payload = JSON.parse(text) as ApiResponse<FeedbackDto[]>;
  if (!payload.success || !Array.isArray(payload.data)) {
    return [];
  }

  const sorted = [...payload.data].sort((a, b) => {
    const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
    const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
    return dateB - dateA;
  });

  return sorted.slice(0, limit);
}

export async function submitFeedback(input: {
  name: string;
  stars: number;
  comment: string;
}): Promise<void> {
  const endpoint = buildEndpoint("/feedbacks");
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: input.name,
      stars: input.stars,
      comment: input.comment,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    let message = "Erro ao enviar feedback.";
    try {
      const payload = JSON.parse(text) as { message?: string };
      if (payload.message) {
        message = payload.message;
      }
    } catch {
      // ignore json parse errors
    }
    throw new Error(message);
  }
}

export async function submitContact(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<void> {
  const endpoint = buildEndpoint("/contacts");
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: input.name,
      email: input.email,
      subject: input.subject,
      message: input.message,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    let message = "Erro ao enviar mensagem.";
    try {
      const payload = JSON.parse(text) as { message?: string };
      if (payload.message) {
        message = payload.message;
      }
    } catch {
      // ignore json parse errors
    }
    throw new Error(message);
  }
}

