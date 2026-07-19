// Envio do formulário de contato via FormSubmit (https://formsubmit.co).
//
// O e-mail de destino fica apenas aqui no código e nunca é renderizado na UI.
// Melhoria futura: depois de ativar o endpoint (primeiro envio confirmado por
// e-mail), trocar o endereço abaixo pelo hash de privacidade fornecido pelo
// FormSubmit (https://formsubmit.co/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx) para
// não expor o e-mail em nenhum lugar, nem no bundle.
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/leo.messiasmarinho@gmail.com";

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
