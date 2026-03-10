import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Layers, Smartphone, RefreshCw, Building2, Target } from "lucide-react";

const services = [
  { icon: Globe, title: "Desenvolvimento de Sites Profissionais", desc: "Sites modernos, rápidos e otimizados para destacar sua marca no digital." },
  { icon: Layers, title: "Landing Pages", desc: "Páginas focadas em conversão com design estratégico e copy persuasivo." },
  { icon: Smartphone, title: "Design Responsivo", desc: "Experiência perfeita em qualquer dispositivo — desktop, tablet ou celular." },
  { icon: RefreshCw, title: "Redesign de Sites", desc: "Modernize seu site atual com uma nova identidade visual e melhor performance." },
  { icon: Building2, title: "Sites Empresariais", desc: "Presença digital sólida e profissional para empresas de todos os tamanhos." },
  { icon: Target, title: "Páginas de Conversão", desc: "Estrutura estratégica para transformar visitantes em leads e clientes." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="py-24 md:py-32 bg-surface" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Serviços</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            O Que <span className="gradient-text">Fazemos</span>
          </h2>
          <div className="gradient-line mx-auto max-w-24" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="glow-card bg-card rounded-xl p-8 border border-border"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="gradient-bg w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                <s.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
