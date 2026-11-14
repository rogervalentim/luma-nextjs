# Component Library

Base de uma biblioteca de componentes reutilizáveis com Next.js App Router,
TypeScript, Tailwind CSS e Storybook.

## Requisitos

- Node.js compatível com Next.js 16
- npm

## Instalação e execução

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.
Para desenvolver e documentar componentes isoladamente:

```bash
npm run storybook
```

O Storybook fica disponível em [http://localhost:6006](http://localhost:6006).

## Verificações

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
npm run build-storybook
```

## Estrutura

```text
.storybook/                 Configuração e preview global do Storybook
src/
  app/                      App Router e estilos globais/Tailwind
  components/
    ui/
      button/               Componente Button e suas histórias
  lib/                       Utilitários compartilhados
public/                      Arquivos estáticos
```

O tema do Tailwind 4 e os tokens iniciais do design system estão em
`src/app/globals.css`. Esse mesmo arquivo é carregado pelo layout Next.js e pelo
preview do Storybook.

## Adicionando componentes

1. Crie uma pasta em `src/components/ui/nome-do-componente/`.
2. Implemente o componente em TypeScript usando utilitários Tailwind.
3. Crie um `NomeDoComponente.stories.tsx` ao lado do componente. Configure
   `argTypes` para controles e adicione `tags: ["autodocs"]`.
4. Exporte o componente pelo `index.ts` da pasta, depois por
   `src/components/ui/index.ts`, para que possa ser importado de `@/components`.

O Storybook encontra automaticamente os arquivos `*.stories.tsx` dentro de
`src/`.
