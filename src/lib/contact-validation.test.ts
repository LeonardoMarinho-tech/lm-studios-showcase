import { describe, it, expect } from "vitest";
import { validateField } from "./contact-validation";

describe("validateField", () => {
  describe("name", () => {
    it("rejeita nome vazio", () => {
      expect(validateField("name", "")).toBe("Nome é obrigatório");
    });

    it("rejeita nome só com espaços", () => {
      expect(validateField("name", "   ")).toBe("Nome é obrigatório");
    });

    it("rejeita nome curto (menos de 3 caracteres)", () => {
      expect(validateField("name", "Al")).toBe("Informe um nome com pelo menos 3 caracteres");
    });

    it("aceita nome válido", () => {
      expect(validateField("name", "Leo Messias")).toBe("");
    });
  });

  describe("email", () => {
    it("rejeita e-mail vazio", () => {
      expect(validateField("email", "")).toBe("E-mail é obrigatório");
    });

    it("rejeita e-mail inválido", () => {
      expect(validateField("email", "não-é-email")).toBe("E-mail inválido");
    });

    it("rejeita e-mail sem domínio", () => {
      expect(validateField("email", "foo@bar")).toBe("E-mail inválido");
    });

    it("aceita e-mail válido", () => {
      expect(validateField("email", "contato@lmstudios.dev")).toBe("");
    });
  });

  describe("phone", () => {
    it("aceita telefone BR formatado", () => {
      expect(validateField("phone", "(11) 95858-5994")).toBe("");
    });

    it("rejeita telefone muito curto", () => {
      expect(validateField("phone", "123")).toBe("Informe um telefone válido");
    });

    it("rejeita telefone com letras", () => {
      expect(validateField("phone", "abcdefghij")).toBe("Informe um telefone válido");
    });

    it("rejeita telefone só com espaços", () => {
      expect(validateField("phone", "   ")).toBe("WhatsApp é obrigatório");
    });

    it("rejeita quantidade de dígitos fora do intervalo aceito", () => {
      // Passa no formato (10-20 caracteres válidos), mas tem poucos dígitos reais.
      expect(validateField("phone", "11--------")).toBe("Informe um WhatsApp válido com DDD");
    });
  });

  describe("message", () => {
    it("rejeita mensagem curta", () => {
      expect(validateField("message", "Oi")).toBe("Conte um pouco mais (mínimo de 10 caracteres)");
    });

    it("rejeita mensagem vazia", () => {
      expect(validateField("message", "")).toBe("Mensagem é obrigatória");
    });

    it("aceita mensagem válida", () => {
      expect(validateField("message", "Gostaria de solicitar um orçamento para um site institucional.")).toBe("");
    });
  });
});
