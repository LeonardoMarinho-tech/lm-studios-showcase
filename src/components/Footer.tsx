import logo from "@/assets/logo.png";
import { Instagram, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511958585994?text=Olá%2C%20vim%20pelo%20site%20da%20LM%20Studios%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="LM Studios" className="h-10 w-10 rounded-full" />
            <span className="font-heading font-bold text-lg text-foreground">LM Studios</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Estúdio de desenvolvimento web focado em criar experiências digitais que geram resultados reais para o seu negócio.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Navegação</h4>
          <ul className="space-y-2">
            {["Início", "Sobre", "Serviços", "Portfólio", "Depoimentos", "Contato"].map((l) => (
              <li key={l}>
                <a href={`#${l === "Início" ? "hero" : l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Contato</h4>
          <div className="flex gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors">
              <MessageCircle size={18} />
            </a>
            <a href="https://www.instagram.com/lmstudios.dev/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="gradient-line mb-8" />
      <p className="text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} LM Studios. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
