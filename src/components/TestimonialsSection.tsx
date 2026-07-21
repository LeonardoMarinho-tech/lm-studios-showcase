import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Erick",
    role: "Fundador — Hubble Soluções",
    text: "Depois do novo site, a Hubble ganhou muito mais presença online. Os clientes chegam até nós com mais facilidade e o negócio passou a transmitir outra credibilidade.",
  },
  {
    name: "João",
    role: "Corretor de Imóveis",
    text: "O Studio Imobiliário me poupou horas de edição de fotos e vídeos. Meu Instagram e meus anúncios ficaram mais bonitos, padronizados — e com muito mais resultado.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="depoimentos" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Depoimentos</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            O Que Nossos <span className="gradient-text">Clientes Dizem</span>
          </h2>
          <div className="gradient-line mx-auto max-w-24" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="glow-card bg-card rounded-xl p-8 border border-border"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
