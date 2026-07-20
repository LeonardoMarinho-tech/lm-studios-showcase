import hubbleScreenshot from "@/assets/hubble-screenshot.jpg";
import hubImobHero from "@/assets/hub-imob-hero.png";
import studioImobiliarioLogo from "@/assets/studio-imobiliario-logo.png";

export interface Project {
  id: string;
  name: string;
  tag: string;
  description: string;
  stack: string[];
  image: string;
  imageAlt: string;
  imageFit: "cover" | "contain";
  link?: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    id: "hubble",
    name: "Hubble Soluções",
    tag: "Website Institucional",
    description:
      "Website profissional desenvolvido para a Hubble Soluções, com design moderno, responsivo e focado em conversão — transmitindo credibilidade e autoridade digital.",
    stack: ["React", "Design Responsivo", "SEO"],
    image: hubbleScreenshot,
    imageAlt: "Captura de tela do website da Hubble Soluções",
    imageFit: "cover",
    link: "https://hubblesolucoes.com",
    linkLabel: "Ver Projeto",
  },
  {
    id: "hub-imob",
    name: "Hub Imob",
    tag: "Sistema Web · Gestão Financeira",
    description:
      "Sistema web que reúne o financeiro de uma imobiliária em uma visão executiva única: receita, despesa e resultado do mês em uma tela. Importação inteligente com integração ao ERP de locação, controle de despesas e contas recorrentes, permissões corporativas granulares e auditoria completa de alterações — com arquitetura testada para meio milhão de lançamentos.",
    stack: ["React", "Supabase", "PostgreSQL"],
    image: hubImobHero,
    imageAlt: "Ilustração da identidade visual do Hub Imob",
    imageFit: "contain",
  },
  {
    id: "studio-imobiliario",
    name: "Studio Imobiliário",
    tag: "Aplicativo Desktop · Automação",
    description:
      "Aplicativo desktop que automatiza a criação de material de divulgação imobiliária. A partir dos dados e fotos de um imóvel, gera automaticamente artes para Feed e Stories e vídeos com narração e música, com preview WYSIWYG e identidade visual aplicada — entregue como instalador Windows pronto para uso.",
    stack: ["Python", "Qt", "FFmpeg"],
    image: studioImobiliarioLogo,
    imageAlt: "Logotipo do Studio Imobiliário",
    imageFit: "contain",
  },
];
