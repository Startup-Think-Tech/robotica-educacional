# Robótica Educacional – Front-end (React + Vite)

Aplicação web que apresenta o projeto **Robótica Educacional**, destacando equipe, metodologia, resultados e canais de contato. O site foi migrado de uma base estática (HTML/CSS/JS) para **React + TypeScript**, permitindo componentização, reuso de lógica e build otimizado.

---

## Visão geral

- **Objetivo**: divulgar o projeto acadêmico Robótica Educacional, com seções dedicadas a objetivos, equipe, metodologia STEAM, resultados e canais de contato/feedback.
- **Migração**: código original em HTML/CSS/JS foi reescrito em React, mantendo textos, paleta e conteúdo, porém com arquitetura modular e responsiva.
- **Integração**: formulários de feedback e contato consomem a API configurada via variável de ambiente (`VITE_API_URL`).

## Tecnologias utilizadas

- **React 19 + TypeScript** – criação de UI com tipagem estática.
- **Vite** – build rápido, dev server com HMR.
- **Tailwind CSS** – estilização utility-first com paleta customizada do projeto.
- **React Router DOM** – gerenciamento de rotas SPAs.
- **shadcn/ui** – componentes UI acessíveis e customizáveis (Sheet, Button, Card, Input, Textarea, Label).
- **Radix UI** – primitivos acessíveis para componentes base do shadcn/ui.
- **Lucide React** – biblioteca de ícones moderna e consistente.
- **ESLint** – linting para manter padrão e qualidade do código.

## Pré-requisitos

- Node.js **18 ou superior** (preferencialmente LTS).
- npm **9 ou superior** (ou substitua por yarn/pnpm adaptando scripts).

## Configuração e execução

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Configure a variável de ambiente:

   Crie um arquivo `.env` na raiz do projeto com:
   ```env
   VITE_API_URL=https://sua-api-url.com
   ```

3. Rode a aplicação em modo desenvolvimento:

   ```bash
   npm run dev
   ```

   Acesse [http://localhost:5173](http://localhost:5173).

## Scripts disponíveis

| Script            | Descrição                                                                 |
|-------------------|----------------------------------------------------------------------------|
| `npm run dev`     | Inicia o servidor de desenvolvimento Vite com HMR.                        |
| `npm run lint`    | Executa o ESLint em todos os arquivos `.ts`/`.tsx`.                       |
| `npm run build`   | Gera o bundle de produção (TypeScript + Vite).                            |
| `npm run preview` | Serve o bundle gerado (pós-build) para validar localmente o resultado.    |

## Estrutura de pastas

```
└─ src/
   ├─ assets/
   │  ├─ icons/           # Ícones e favicons
   │  └─ img/             # Imagens utilizadas nas páginas (equipe, resultados, etc.)
   ├─ components/
   │  ├─ common/          # Toast, botão "Voltar ao topo" e utilidades reaproveitáveis
   │  ├─ layout/          # Componentes de estrutura: cabeçalho, rodapé, navegação mobile
   │  ├─ theme/           # Botão de alternância de tema
   │  └─ ui/              # Componentes UI do shadcn/ui (Button, Card, Input, Textarea, Label, Sheet)
   ├─ constants/          # Constantes da aplicação (links de navegação, etc.)
   ├─ contexts/           # Providers globais (ThemeProvider)
   ├─ hooks/              # Hooks customizados (useToast, useScrollAnimation, useScrollVisibility)
   ├─ layouts/            # Layouts de alto nível (MainLayout com Header/Footer)
   ├─ lib/                # Utilitários (cn function para merge de classes Tailwind)
   ├─ pages/              # Páginas da aplicação (Sobre, Equipe, Resultados, etc.)
   ├─ services/           # Comunicação com a API (feedbacks, contatos)
   ├─ App.tsx             # Declaração das rotas do React Router
   ├─ index.css           # Importação do Tailwind, variáveis CSS e estilos globais
   └─ main.tsx            # Ponto de entrada: ReactDOM + BrowserRouter + ThemeProvider

Outros arquivos importantes:
├─ components.json        # Configuração do shadcn/ui (paths, style, etc.)
├─ tailwind.config.js     # Configuração Tailwind (paleta personalizada, animações)
├─ postcss.config.js      # PostCSS + Tailwind
├─ vite.config.ts         # Configuração do Vite (plugins, path aliases)
├─ tsconfig.json          # Projeto raiz do TypeScript (referencia configs específicas)
├─ tsconfig.app.json      # Configurações TS para o código da aplicação (DOM/JSX)
└─ tsconfig.node.json     # Configurações TS para scripts/Node (config do Vite, lint etc.)
```

## Detalhes por módulo

### Layout e navegação

- **`MainLayout`**: envolve cada página com `SiteHeader` e `SiteFooter`, adiciona padding no mobile para compensar header fixo.
- **`SiteHeader`**: cabeçalho sticky no desktop e fixed no mobile, com menu responsivo usando shadcn/ui Sheet.
- **`MobileNavigation`**: sidebar animada usando shadcn/ui Sheet com overlay escuro, animações suaves e fechamento via clique/ESC.
- **`SiteFooter`**: rodapé com link para contato e direitos autorais.
- **`BackToTopButton`**: botão flutuante circular que aparece ao rolar a página, adaptado ao tema.

### Componentes UI (shadcn/ui)

- **`Button`**: componente de botão com variantes customizadas, usado em formulários.
- **`Card`**, **`CardContent`**, **`CardHeader`**: componentes de card para estruturação de conteúdo.
- **`Input`**: campo de entrada com suporte a tema dark/light e validação visual.
- **`Textarea`**: campo de texto multi-linha com largura fixa e sem redimensionamento.
- **`Label`**: label estilizado para formulários.
- **`FormField`**, **`FormInput`**, **`FormTextarea`**: componentes que agrupam Label + Input/Textarea + mensagens de erro.
- **`Sheet`**: componente de sidebar/drawer usado na navegação mobile.
- **`ResultCard`**: card customizado para exibir resultados na página de resultados.
- **`FeedbackCard`**: card customizado para exibir depoimentos na página de feedbacks.

### Ícones

Todos os ícones SVG foram substituídos por componentes do **Lucide React**:
- `ArrowUp` – botão voltar ao topo
- `Sun`, `Moon` – alternância de tema
- `Menu` – menu hambúrguer mobile
- `X` – fechar sidebar e toast
- `User` – avatar nos cards de feedback
- `ChevronLeft`, `ChevronRight` – navegação do carrossel de equipe

### Hooks customizados

- **`useToast`**: gerencia estado de toasts (sucesso/erro) com timeout automático.
- **`useScrollAnimation`**: detecta quando elementos entram no viewport usando IntersectionObserver para animações.
- **`useScrollVisibility`**: controla visibilidade de elementos baseado na posição do scroll (usado no BackToTopButton).

### Páginas

- **`AboutPage`**: introdução, objetivos e público-alvo.
- **`TeamPage`**: carrossel horizontal com cards da equipe, botões de navegação e responsividade.
- **`ResultsPage`**: 
  - Carrossel automático com indicadores e padding interno nas imagens.
  - Cards de resultados com animações de scroll (fade-in e slide-up).
  - Seção de planejamento com texto explicativo.
- **`MethodologyPage`**: 
  - Cards STEAM com layout vertical no mobile e horizontal no desktop.
  - Explicação didática do STEAM e seus benefícios.
- **`FeedbackPage`**: 
  - Recupera 6 depoimentos da API.
  - Cards de feedback usando componente FeedbackCard.
  - Formulário com validação (nome obrigatório, comentário obrigatório, avaliação obrigatória).
  - Sistema de estrelas (1-5) com hover e seleção em cascata (selecionar 5 seleciona todas).
- **`ContactPage`**: 
  - Formulário integrado ao endpoint de contatos com validação completa.
  - Validação de e-mail, campos obrigatórios e mensagens de erro.
  - Estados de `submit` e toasts.

### Serviços e validação

- **`services/api.ts`**: funções `fetchLatestFeedbacks`, `submitFeedback`, `submitContact` que usam `import.meta.env.VITE_API_URL` e centralizam erros/mensagens.
- **Validação de formulários**: validação client-side com mensagens de erro por campo, limpeza automática de erros ao digitar.

### Animações

- **Scroll animations**: cards de resultados aparecem com fade-in e slide-up ao rolar.
- **Sidebar mobile**: animações suaves de slide e fade usando Radix UI data attributes.
- **Hover effects**: estrelas de avaliação destacam ao passar o mouse.

## Estilização e tema

- **Tailwind CSS** configurado com cores específicas (`brand`, `feedback`, `steam`) para refletir a identidade original.
- **Tema padrão escuro** com opção de alternar para claro; toda a UI reage às classes `dark`/`light`.
- **Variáveis CSS** do shadcn/ui para temas light/dark integradas.
- **Animações customizadas** (slide-in-right, slide-out-right, fade-in-up) configuradas no Tailwind.
- **Layouts responsivos** usando Tailwind + classes utilitárias para mobile-first design.
- **Path aliases** (`@/*`) configurados para imports mais limpos.

## Build, testes e deploy

- `npm run build` gera a pasta `dist/` pronta para deploy estático (Vercel, Netlify, Github Pages, etc.).
- `npm run preview` permite inspecionar o resultado do build localmente antes de publicar.
- O repositório possui lint configurado (`npm run lint`). É recomendável integrá-lo no pipeline de CI/CD.
- Testes automatizados ainda não foram adicionados; considere Vitest/Testing Library para cobrir componentes críticos.

## Funcionalidades principais

- ✅ Tema claro/escuro com persistência em localStorage
- ✅ Navegação responsiva com sidebar animada no mobile
- ✅ Formulários com validação completa e mensagens de erro
- ✅ Sistema de estrelas interativo (1-5) com hover e seleção em cascata
- ✅ Animações de scroll para elementos
- ✅ Botão flutuante "Voltar ao topo" com detecção de scroll
- ✅ Carrosséis automáticos com indicadores
- ✅ Toasts para feedback de ações (sucesso/erro)
- ✅ Integração com API para feedbacks e contatos
- ✅ Componentização completa com shadcn/ui
- ✅ Acessibilidade (ARIA labels, navegação por teclado, etc.)

## Notas de desenvolvimento

- Os componentes do shadcn/ui podem ser instalados usando `npx shadcn@latest add [component]`.
- A configuração do shadcn/ui está em `components.json`.
- Path aliases configurados: `@/components`, `@/lib`, `@/hooks`, etc.
- O favicon está localizado em `/src/assets/icons/thinktech.png` e referenciado no `index.html`.
