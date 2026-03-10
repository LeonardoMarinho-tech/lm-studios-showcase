import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Sobre Nós</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Estrutura. Performance. <span className="gradient-text">Presença.</span>
          </h2>
          <div className="gradient-line mx-auto max-w-24 mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            A <strong className="text-foreground">LM Studios</strong> é um estúdio de desenvolvimento web focado em
            criar experiências digitais que geram resultados reais. Combinamos design moderno,
            código limpo e estratégia de conversão para transformar visitantes em clientes.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cada projeto é único — construído do zero, sem templates genéricos.
            Nossa missão é posicionar sua marca no digital com autoridade, velocidade e presença profissional.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
