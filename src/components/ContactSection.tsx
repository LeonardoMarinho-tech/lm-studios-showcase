import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import type { ChangeEvent, FocusEvent, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, MessageCircle, Loader2 } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { sendContactMessage } from "@/lib/contact";
import { FIELD_NAMES, validateField, type FieldName } from "@/lib/contact-validation";

type FormStatus = "idle" | "sending" | "success" | "error";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [attempted, setAttempted] = useState(false);

  const validateAll = (form: HTMLFormElement): Partial<Record<FieldName, string>> => {
    const data = new FormData(form);
    const newErrors: Partial<Record<FieldName, string>> = {};

    FIELD_NAMES.forEach((name) => {
      const error = validateField(name, data.get(name)?.toString() ?? "");
      if (error) newErrors[name] = error;
    });

    return newErrors;
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!attempted) return;
    const name = e.target.name as FieldName;
    if (!FIELD_NAMES.includes(name)) return;
    const error = validateField(name, e.target.value);
    setErrors((prev) => ({ ...prev, [name]: error || undefined }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!attempted) return;
    const name = e.target.name as FieldName;
    if (!FIELD_NAMES.includes(name)) return;
    const error = validateField(name, e.target.value);
    setErrors((prev) => ({ ...prev, [name]: error || undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: se preenchido, é bot — abandona silenciosamente.
    if (new FormData(form).get("_honey")?.toString()) return;

    setAttempted(true);
    const newErrors = validateAll(form);

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    const data = new FormData(form);

    try {
      await sendContactMessage({
        name: data.get("name")?.toString().trim() ?? "",
        email: data.get("email")?.toString().trim() ?? "",
        phone: data.get("phone")?.toString().trim() ?? "",
        company: data.get("company")?.toString().trim() || undefined,
        service: data.get("service")?.toString().trim() || undefined,
        message: data.get("message")?.toString().trim() ?? "",
      });

      setStatus("success");
      form.reset();
      setAttempted(false);
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm";

  const sending = status === "sending";

  return (
    <section id="contato" className="py-24 md:py-32 bg-surface" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Contato</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <div className="gradient-line mx-auto max-w-24" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* CTA principal: WhatsApp */}
          <motion.div
            className="glow-card bg-card rounded-xl p-8 md:p-10 border border-border text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mx-auto mb-5">
              <MessageCircle size={26} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-xl md:text-2xl text-foreground mb-2">
              Fale direto no WhatsApp
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mb-6">
              Resposta rápida em horário comercial. É a forma mais ágil de tirar dúvidas e pedir seu orçamento.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg text-primary-foreground font-medium px-8 py-4 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              Chamar no WhatsApp <MessageCircle size={18} />
            </a>
          </motion.div>

          {/* Divisor */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground uppercase tracking-widest">
              ou, se preferir, envie uma mensagem
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Formulário alternativo */}
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            className="bg-card rounded-xl p-8 md:p-10 border border-border"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Honeypot anti-spam (invisível para humanos) */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: "none" }}
              aria-hidden="true"
            />

            {status === "success" && (
              <div
                role="status"
                aria-live="polite"
                className="mb-6 flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4"
              >
                <CheckCircle size={20} className="text-accent flex-shrink-0" />
                <p className="text-sm text-foreground">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
              </div>
            )}

            {status === "error" && (
              <div role="alert" className="mb-6 flex items-center gap-3 bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <AlertCircle size={20} className="text-destructive flex-shrink-0" />
                <p className="text-sm text-foreground">
                  Não foi possível enviar sua mensagem. Tente novamente ou{" "}
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                    chame no WhatsApp
                  </a>
                  .
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  name="name"
                  placeholder="Nome completo"
                  aria-label="Nome completo"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-error-name" : undefined}
                  className={inputClass}
                  maxLength={100}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  disabled={sending}
                />
                {errors.name && (
                  <p id="contact-error-name" className="text-destructive text-xs mt-1">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <input
                  name="phone"
                  placeholder="WhatsApp"
                  aria-label="WhatsApp"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "contact-error-phone" : undefined}
                  className={inputClass}
                  maxLength={20}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  disabled={sending}
                />
                {errors.phone && (
                  <p id="contact-error-phone" className="text-destructive text-xs mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  aria-label="E-mail"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-error-email" : undefined}
                  className={inputClass}
                  maxLength={255}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  disabled={sending}
                />
                {errors.email && (
                  <p id="contact-error-email" className="text-destructive text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <input
                name="company"
                placeholder="Nome da empresa (opcional)"
                aria-label="Nome da empresa (opcional)"
                className={inputClass}
                maxLength={100}
                disabled={sending}
              />
            </div>
            <select
              name="service"
              aria-label="Qual serviço você precisa?"
              className={inputClass + " mb-4 appearance-none"}
              disabled={sending}
            >
              <option value="">Qual serviço você precisa?</option>
              <option>Desenvolvimento de Site</option>
              <option>Landing Page</option>
              <option>Redesign de Site</option>
              <option>Site Empresarial</option>
              <option>Outro</option>
            </select>
            <div className="mb-6">
              <textarea
                name="message"
                rows={4}
                placeholder="Sua mensagem"
                aria-label="Sua mensagem"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-error-message" : undefined}
                className={inputClass}
                maxLength={1000}
                onBlur={handleBlur}
                onChange={handleChange}
                disabled={sending}
              />
              {errors.message && (
                <p id="contact-error-message" className="text-destructive text-xs mt-1">
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full gradient-bg text-primary-foreground font-medium py-4 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  Enviando... <Loader2 size={18} className="animate-spin" />
                </>
              ) : (
                <>
                  Enviar Mensagem <Send size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
