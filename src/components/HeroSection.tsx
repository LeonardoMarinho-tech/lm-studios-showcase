import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511958585994?text=Olá%2C%20vim%20pelo%20site%20da%20LM%20Studios%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] gradient-bg pointer-events-none" />

      <div className="container mx-auto px-4 pt-20 pb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
            Web Development Studio
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-2">
            Sites Modernos Que Fazem
          </h1>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight gradient-text mb-8">
            Seu Negócio Crescer
          </h1>
        </motion.div>

        {/* Gradient line */}
        <motion.div
          className="gradient-line mx-auto max-w-xl origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        />

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-8 mb-10 font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Criamos websites profissionais, estratégicos e focados em conversão
          para posicionar sua marca no digital com autoridade.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg text-primary-foreground font-medium px-8 py-4 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
          >
            Falar no WhatsApp <ArrowRight size={18} />
          </a>
          <a
            href="#servicos"
            className="border border-border text-foreground font-medium px-8 py-4 rounded-lg hover:bg-secondary transition-colors inline-flex items-center justify-center"
          >
            Ver Serviços
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
