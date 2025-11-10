# Robótica Educacional – Front-end (React + Vite)

Aplicação web que apresenta o projeto **Robótica Educacional**, destacando equipe, metodologia, resultados e canais de contato. O site foi migrado de uma base estática (HTML/CSS/JS) para **React + TypeScript**, permitindo componentização, reuso de lógica e build otimizado.

---

## Sumário

1. [Visão geral](#visão-geral)
2. [Tecnologias utilizadas](#tecnologias-utilizadas)
3. [Pré-requisitos](#pré-requisitos)
4. [Configuração e execução](#configuração-e-execução)
5. [Scripts disponíveis](#scripts-disponíveis)
6. [Estrutura de pastas](#estrutura-de-pastas)
7. [Detalhes por módulo](#detalhes-por-módulo)
8. [Estilização e tema](#estilização-e-tema)
9. [Build, testes e deploy](#build-testes-e-deploy)

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

   ```bash
   cp .env.example .env
   ```

   Atualize `VITE_API_URL` no arquivo `.env` para apontar ao back-end.

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
   ├─ assets/              # Imagens utilizadas nas páginas (equipe, resultados, etc.)
   ├─ components/
   │  ├─ common/           # Toast, botão "Voltar ao topo" e utilidades reaproveitáveis
   │  ├─ layout/           # Componentes de estrutura: cabeçalho, rodapé, navegação mobile
   │  └─ theme/            # Botão de alternância de tema
   ├─ contexts/            # Providers globais (ex.: ThemeProvider)
   ├─ hooks/               # Hooks customizados (ex.: useToast)
   ├─ layouts/             # Layouts de alto nível (MainLayout com Header/Footer)
   ├─ pages/               # Páginas da aplicação (Sobre, Equipe, Resultados, etc.)
   ├─ services/            # Comunicação com a API (feedbacks, contatos)
   ├─ App.tsx              # Declaração das rotas do React Router
   ├─ index.css            # Importação do Tailwind e estilos globais
   └─ main.tsx             # Ponto de entrada: ReactDOM + BrowserRouter + ThemeProvider

Outros arquivos importantes:
├─ tailwind.config.js      # Configuração Tailwind (paleta personalizada)
├─ postcss.config.js       # PostCSS + Tailwind
├─ tsconfig.json           # Projeto raiz do TypeScript (referencia configs específicas)
├─ tsconfig.app.json       # Configurações TS para o código da aplicação (DOM/JSX)
└─ tsconfig.node.json      # Configurações TS para scripts/Node (config do Vite, lint etc.)
```

## Detalhes por módulo

- **Layout principal (`MainLayout`)**: envolve cada página com `SiteHeader` e `SiteFooter`.
- **`SiteHeader` / `MobileNavigation`**: cabeçalho sticky, menu responsivo, fechamento via clique/ESC e alternância de tema.
- **`SiteFooter` + `BackToTopButton`**: rodapé com link para contato, direitos autorais e atalho para voltar ao topo.
- **`ThemeProvider`**: guarda tema atual (claro/escuro) em contexto e `localStorage`, aplicando classes `light`/`dark` ao `documentElement`.
- **Páginas em `src/pages`**:
  - `AboutPage`: introdução, objetivos e público-alvo.
  - `TeamPage`: carrossel horizontal com cards da equipe (botões de navegação e responsividade).
  - `ResultsPage`: carrossel automático com indicadores e cards com fotos/textos dos resultados.
  - `MethodologyPage`: explicação didática do STEAM e seus benefícios.
  - `FeedbackPage`: recupera depoimentos da API, mostra cards e permite enviar novos feedbacks (controle de estado, toasts).
  - `ContactPage`: formulário integrado ao endpoint de contatos, com estado de `submit` e toasts.
- **`services/api.ts`**: funções `fetchLatestFeedbacks`, `submitFeedback`, `submitContact` que usam `import.meta.env.VITE_API_URL` e centralizam erros/mensagens.
- **`useToast` + `Toast`**: hook e componente para exibir feedback visual com timeout e diferentes variantes (sucesso/erro).

## Estilização e tema

- Tailwind CSS configurado com cores específicas (`brand`, `feedback`, `steam`) para refletir a identidade original.
- Tema padrão escuro com opção de alternar para claro; toda a UI reage às classes `dark`/`light`.
- Layouts e carrosséis usam Tailwind + classes utilitárias para responsividade (grid, flex, overflow-x, etc.).

## Build, testes e deploy

- `npm run build` gera a pasta `dist/` pronta para deploy estático (Vercel, Netlify, Github Pages, etc.).
- `npm run preview` permite inspecionar o resultado do build localmente antes de publicar.
- O repositório possui lint configurado (`npm run lint`). É recomendável integrá-lo no pipeline de CI/CD.
- Testes automatizados ainda não foram adicionados; considere Vitest/Testing Library para cobrir componentes críticos.
