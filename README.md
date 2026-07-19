# LM Studios — Site Institucional

Site institucional one-page da **LM Studios**, um estúdio de desenvolvimento web. O projeto está em produção em [lmstudios.netlify.app](https://lmstudios.netlify.app/).

## Stack

- [Vite](https://vitejs.dev/)
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) para animações
- [React Router](https://reactrouter.com/) para roteamento
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) para testes

## Estrutura da página

A página inicial (`src/pages/Index.tsx`) é composta pelas seguintes seções, renderizadas em ordem:

1. **Navbar** — navegação fixa no topo
2. **Hero** — chamada principal
3. **About** — sobre o estúdio
4. **Services** — serviços oferecidos
5. **Why Choose** — diferenciais
6. **Portfolio** — trabalhos realizados
7. **Testimonials** — depoimentos de clientes
8. **Contact** — formulário/informações de contato
9. **Footer** — rodapé
10. **WhatsApp Button** — botão flutuante de contato via WhatsApp

Uma rota `*` (`src/pages/NotFound.tsx`) trata caminhos não encontrados.

## Como rodar localmente

Pré-requisito: Node.js e npm instalados.

```sh
# Instalar as dependências
npm i

# Iniciar o servidor de desenvolvimento (http://localhost:8080)
npm run dev
```

## Como buildar

```sh
npm run build
```

O resultado é gerado na pasta `dist/`. Para pré-visualizar o build de produção localmente, use `npm run preview`.

## Como testar

```sh
npm run test
```

Também é possível rodar os testes em modo watch com `npm run test:watch`, e checar lint com `npm run lint`.

## Estrutura de pastas (resumida)

```
src/
├── assets/         # imagens e outros arquivos estáticos usados pelos componentes
├── components/     # componentes da página (Navbar, HeroSection, Footer, etc.)
├── pages/          # páginas roteadas (Index, NotFound)
├── test/           # setup e testes automatizados
├── App.tsx         # definição das rotas (BrowserRouter)
├── main.tsx        # ponto de entrada da aplicação
└── index.css       # estilos globais e variáveis de tema (Tailwind)
```
