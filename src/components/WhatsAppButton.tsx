import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511958585994?text=Olá%2C%20vim%20pelo%20site%20da%20LM%20Studios%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-bg flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="WhatsApp"
  >
    <MessageCircle size={26} className="text-primary-foreground" />
  </a>
);

export default WhatsAppButton;
