import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    if (!data.get("name")?.toString().trim()) newErrors.name = "Nome é obrigatório";
    if (!data.get("email")?.toString().trim()) newErrors.email = "E-mail é obrigatório";
    if (!data.get("phone")?.toString().trim()) newErrors.phone = "WhatsApp é obrigatório";
    if (!data.get("message")?.toString().trim()) newErrors.message = "Mensagem é obrigatória";

    const email = data.get("email")?.toString() || "";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "E-mail inválido";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass = "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm";

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

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card rounded-xl p-8 md:p-10 border border-border"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted && (
            <div className="mb-6 flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
              <CheckCircle size={20} className="text-accent flex-shrink-0" />
              <p className="text-sm text-foreground">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <input name="name" placeholder="Nome completo" className={inputClass} maxLength={100} />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input name="phone" placeholder="WhatsApp" className={inputClass} maxLength={20} />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <input name="email" type="email" placeholder="E-mail" className={inputClass} maxLength={255} />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <input name="company" placeholder="Nome da empresa (opcional)" className={inputClass} maxLength={100} />
          </div>
          <select name="service" className={inputClass + " mb-4 appearance-none"}>
            <option value="">Qual serviço você precisa?</option>
            <option>Desenvolvimento de Site</option>
            <option>Landing Page</option>
            <option>Redesign de Site</option>
            <option>Site Empresarial</option>
            <option>Outro</option>
          </select>
          <div className="mb-6">
            <textarea name="message" rows={4} placeholder="Sua mensagem" className={inputClass} maxLength={1000} />
            {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full gradient-bg text-primary-foreground font-medium py-4 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
          >
            Enviar Mensagem <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
