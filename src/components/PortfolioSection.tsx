import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glow-card bg-card rounded-xl overflow-hidden border border-border group flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
            >
              <div
                className={
                  project.imageFit === "cover"
                    ? "h-48 md:h-56 overflow-hidden"
                    : "h-48 md:h-56 overflow-hidden bg-white flex items-center justify-center p-6"
                }
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className={
                    project.imageFit === "cover"
                      ? "w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      : "w-full h-full object-contain"
                  }
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {project.tag}
                </span>
                <h3 className="font-heading font-semibold text-xl mt-2 mb-3 text-foreground">{project.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-border bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-medium gradient-bg text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm mt-auto"
                  >
                    {project.linkLabel ?? "Ver Projeto"} <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="text-xs text-muted-foreground italic mt-auto">
                    Projeto sob demanda · detalhes no contato
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
