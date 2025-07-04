# Plataforma do Programa de Metas - Prefeitura Municipal de São José

Este é um projeto desenvolvido com [Next.js](https://nextjs.org/) para a plataforma de visualização e acompanhamento do Programa de Metas da Prefeitura Municipal de São José.

## Visão Geral

O objetivo principal desta plataforma é apresentar de forma transparente e acessível os projetos, objetivos e resultados do Programa de Metas. A plataforma permite que os cidadãos acompanhem o andamento das metas estabelecidas, conheçam detalhes de cada ação e entendam como a prefeitura está trabalhando para construir uma cidade mais moderna, sustentável e inclusiva.

## ✨ Funcionalidades

* **Página Inicial:** Uma landing page que apresenta a missão e a visão do programa, com navegação intuitiva para as principais seções.
* **Página de Secretarias:** Lista todas as secretarias e fundações participantes, servindo como um portal para a visualização detalhada de cada uma.
* **Página Detalhada por Secretaria:** Cada secretaria possui uma página dinâmica que exibe:
    * Gráficos interativos com dados relevantes sobre suas metas e progresso.
    * Link para a planilha completa de metas, permitindo uma análise aprofundada.
    * Proteção de conteúdo por senha para acesso a informações estratégicas.
* **Dashboard Geral:** Um painel centralizado que apresenta os principais indicadores e gráficos consolidados do programa de governo, oferecendo uma visão macro do andamento das metas.

## 🚀 Tecnologias Utilizadas

* **Framework:** [Next.js](https://nextjs.org/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Biblioteca Principal:** [React](https://reactjs.org/)
* **Estilização:** [CSS Modules](https://github.com/css-modules/css-modules)
* **Criptografia:** [CryptoJS](https://cryptojs.gitbook.io/docs) (para a proteção de conteúdo)

## 📂 Estrutura do Projeto

O projeto segue a estrutura de diretórios do **App Router** do Next.js:

```
/
├── src/
│   ├── app/
│   │   ├── dashboard/                # Rota e página do Dashboard Geral
│   │   ├── secretarias/
│   │   │   ├── [slug]/               # Página dinâmica para cada secretaria
│   │   │   ├── page.tsx              # Página que lista as secretarias
│   │   │   └── secretariasData.ts    # Dados de conteúdo e URLs das secretarias
│   │   ├── layout.tsx                # Layout principal da aplicação
│   │   └── page.tsx                  # Página inicial (Home)
│   ├── components/
│   │   └── ProtectedContent.jsx      # Componente de proteção de conteúdo por senha
│   └── public/
│       └── ...                       # Imagens, logos e outros arquivos estáticos
├── next.config.ts
├── package.json
└── ...
```

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento.

**Pré-requisitos:**

* [Node.js](https://nodejs.org/) (versão 18.18.0 ou superior)
* Um gerenciador de pacotes: [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/)

**1. Clone o repositório:**

```bash
git clone [https://github.com/bernardothives/plano-de-metas-pmsj.git](https://github.com/bernardothives/plano-de-metas-pmsj.git)
cd plano-de-metas-pmsj
```

**2. Instale as dependências:**

Usando npm:
```bash
npm install
```

Usando yarn:
```bash
yarn install
```

**3. Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

**4. Abra no navegador:**

Acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação em execução.

## ☁️ Deploy

A forma mais fácil de fazer o deploy desta aplicação Next.js é utilizando a [**Plataforma Vercel**](https://vercel.com/new), desenvolvida pelos criadores do Next.js.

Para mais detalhes, consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
