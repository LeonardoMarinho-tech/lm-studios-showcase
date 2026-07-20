// Envio do formulário de contato via FormSubmit (https://formsubmit.co).
//
// O destino usa o hash de privacidade do FormSubmit (endpoint já ativado),
// então o e-mail real não aparece em lugar nenhum — nem no bundle.
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/a825d19dff4afd4ec03b019c6b71272b";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
}

interface FormSubmitResponse {
  success?: string | boolean;
  message?: string;
}

export async function sendContactMessage(data: ContactFormData): Promise<void> {
  const res = await fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...data,
      _subject: "Novo contato pelo site — LM Studios",
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!res.ok) {
    throw new Error("Falha ao enviar mensagem. Tente novamente.");
  }

  const json = (await res.json()) as FormSubmitResponse;

  if (json.success === false || json.success === "false") {
    throw new Error(json.message ?? "Falha ao enviar mensagem. Tente novamente.");
  }
}
