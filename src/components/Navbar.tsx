import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_URL = "https://wa.me/5511958585994?text=Olá%2C%20vim%20pelo%20site%20da%20LM%20Studios%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/10 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(90deg, #004aad, #cb6ce6)"
          : "linear-gradient(90deg, rgba(0,74,173,0.75), rgba(203,108,230,0.75))",
        backdropFilter: scrolled ? "none" : "blur(12px)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="LM Studios" className="h-14 w-14 rounded-full" />
          <span className="font-heading font-bold text-xl text-white">LM Studios</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/75 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-white/30 transition-all border border-white/20"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile/Tablet trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile/Tablet menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t border-white/15"
          style={{ background: "linear-gradient(180deg, rgba(0,74,173,0.95), rgba(203,108,230,0.95))", backdropFilter: "blur(16px)" }}
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 text-white font-medium px-5 py-3 rounded-lg text-center hover:bg-white/30 transition-all border border-white/20"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
