// Regras puras de validação do formulário de contato.
// Isoladas de ContactSection.tsx para permitir testes unitários diretos.

export type FieldName = "name" | "email" | "phone" | "message";

export const FIELD_NAMES: FieldName[] = ["name", "email", "phone", "message"];

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_FORMAT_REGEX = /^[\d\s()+-]{10,20}$/;

export const validateField = (name: FieldName, rawValue: string): string => {
  const value = rawValue.trim();

  switch (name) {
    case "name":
      if (!value) return "Nome é obrigatório";
      if (value.length < 3) return "Informe um nome com pelo menos 3 caracteres";
      return "";
    case "email":
      if (!value) return "E-mail é obrigatório";
      if (!EMAIL_REGEX.test(value)) return "E-mail inválido";
      return "";
    case "phone": {
      if (!value) return "WhatsApp é obrigatório";
      if (!PHONE_FORMAT_REGEX.test(value)) return "Informe um telefone válido";
      const digits = value.replace(/\D/g, "");
      if (digits.length < 10 || digits.length > 13) return "Informe um WhatsApp válido com DDD";
      return "";
    }
    case "message":
      if (!value) return "Mensagem é obrigatória";
      if (value.length < 10) return "Conte um pouco mais (mínimo de 10 caracteres)";
      return "";
    default:
      return "";
  }
};
