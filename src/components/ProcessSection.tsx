import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessagesSquare, FileText, Code2, Rocket } from "lucide-react";

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "Vite",
  "Qt",
  "FFmpeg",
];

const steps = [
  {
    icon: MessagesSquare,
    title: "Conversa Inicial",
    desc: "Entendemos seu negócio, objetivos e público em uma conversa direta, sem burocracia.",
  },
  {
    icon: FileText,
    title: "Proposta Clara",
    desc: "Você recebe escopo, prazo e investimento definidos antes de qualquer compromisso.",
  },
  {
    icon: Code2,
    title: "Design & Desenvolvimento",
    desc: "Criamos e desenvolvemos seu projeto com acompanhamento e validações ao longo do caminho.",
  },
  {
    icon: Rocket,
    title: "Entrega & Suporte",
    desc: "Publicamos o projeto e seguimos por perto para ajustes e evolução.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="processo" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Como Trabalhamos</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Do Primeiro Contato <span className="gradient-text">à Entrega</span>
          </h2>
          <div className="gradient-line mx-auto max-w-24" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="relative glow-card bg-card rounded-xl p-8 border border-border"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="absolute top-6 right-6 font-heading font-bold text-3xl text-muted-foreground/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="gradient-bg w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                <s.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
            Tecnologias Que Dominamos
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="border border-border bg-secondary/50 rounded-full px-4 py-2 text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
