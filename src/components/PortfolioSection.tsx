import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511958585994?text=Olá%2C%20vim%20pelo%20site%20da%20LM%20Studios%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

const projects = [
  {
    title: "E-Commerce Premium",
    category: "Loja Virtual",
    desc: "Plataforma de vendas moderna com design focado em conversão e experiência do usuário.",
    gradient: "from-purple-600 to-blue-500",
  },
  {
    title: "Site Institucional",
    category: "Empresa de Tecnologia",
    desc: "Presença digital profissional com estrutura estratégica para geração de leads qualificados.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Landing Page de Alta Conversão",
    category: "Marketing Digital",
    desc: "Página otimizada com copy persuasivo e design orientado a resultados mensuráveis.",
    gradient: "from-violet-500 to-pink-500",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-surface" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Portfólio</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Projetos <span className="gradient-text">Em Destaque</span>
          </h2>
          <div className="gradient-line mx-auto max-w-24" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="glow-card bg-card rounded-xl overflow-hidden border border-border group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={`h-48 bg-gradient-to-br ${p.gradient} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                <span className="text-primary-foreground/60 font-heading text-sm tracking-widest uppercase">Preview</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{p.category}</span>
                <h3 className="font-heading font-semibold text-lg mt-2 mb-3 text-foreground">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium gradient-text hover:opacity-80 transition-opacity"
                >
                  Solicitar Similar <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
