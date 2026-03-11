import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import hubbleScreenshot from "@/assets/hubble-screenshot.png";

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
            Projeto <span className="gradient-text">Em Destaque</span>
          </h2>
          <div className="gradient-line mx-auto max-w-24" />
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto glow-card bg-card rounded-xl overflow-hidden border border-border group"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="h-56 md:h-72 overflow-hidden">
            <img src={hubbleScreenshot} alt="Hubble Soluções - Website" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-8">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Soluções Digitais</span>
            <h3 className="font-heading font-semibold text-xl mt-2 mb-3 text-foreground">Hubble Soluções</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Website profissional desenvolvido para a Hubble Soluções, com design moderno, responsivo e focado em conversão — transmitindo credibilidade e autoridade digital.
            </p>
            <a
              href="https://hubblesolucoes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium gradient-bg text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Ver Projeto <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
