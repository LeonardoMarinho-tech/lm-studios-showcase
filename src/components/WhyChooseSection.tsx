import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, BarChart3, Palette, MonitorSmartphone, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Palette, label: "Design moderno e exclusivo" },
  { icon: MonitorSmartphone, label: "100% responsivo e mobile-friendly" },
  { icon: Zap, label: "Carregamento ultrarrápido" },
  { icon: Shield, label: "Estrutura estratégica e segura" },
  { icon: TrendingUp, label: "Foco total em conversão" },
  { icon: BarChart3, label: "Presença digital profissional" },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Por Que Nos Escolher</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
              Estrutura.{" "}
              <span className="gradient-text">Performance.</span>
              <br />
              Presença.
            </h2>
            <div className="gradient-line max-w-24 mt-6" />
          </motion.div>

          <motion.ul
            className="space-y-5"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {benefits.map((b) => (
              <li key={b.label} className="flex items-center gap-4">
                <div className="gradient-bg w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <b.icon size={18} className="text-primary-foreground" />
                </div>
                <span className="text-foreground font-medium">{b.label}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
