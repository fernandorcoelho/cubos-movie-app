# Cubos Movies App 🎬

<p align="center">
  <img src="public/images/github/branding.png" alt="Logo">
</p>

Cubos Movies App é uma aplicação de pesquisa de filmes construída com React e TypeScript, utilizando a API do TheMovieDB. Este projeto foi desenvolvido como parte de um desafio proposto pela Cubos Tecnologia.

## 🚀 Executando o projeto

Para executar o projeto, siga as seguintes instruções:

1. Clone o repositório para o seu ambiente de desenvolvimento.
2. Execute `npm install` para instalar todas as dependências necessárias do projeto.
3. Crie uma conta no TheMovieDB e obtenha sua apiKey.
4. Inclua sua apiKey no arquivo `src/services/api/apiConfig.ts`.
5. Inicie a aplicação com `npm start`.

## 📲 PWA

Para baixar a aplicação em PWA, siga as etapas abaixo:

1. Em `index.tsx`, troque `serviceWorkerRegistration.unregister()` por `serviceWorkerRegistration.register()`.
2. Execute `npm run build` para fazer gerar a build do projeto.
3. Execute `npm run serve-build` para acessar o projeto na URL https://localhost:3000/
4. Acesse a URL do build no seu navegador.
5. No canto direito da barra de URL, você deve ver um ícone de download ou um símbolo '+'.
6. Clique neste ícone e confirme que você quer instalar o aplicativo.

## 🛠 Características do projeto

O projeto foi construído com as seguintes tecnologias:

- **React & TypeScript:** A combinação de React e TypeScript proporciona um desenvolvimento robusto e eficiente, permitindo a criação de componentes reutilizáveis com tipagem estática.
- **Context API**: Utilizado para o gerenciamento de estados na aplicação. Optamos por utilizar a Context API em vez do Redux devido à sua simplicidade e por se adequar às necessidades do projeto. A Context API, por ser uma solução nativa do React, proporciona um melhor desempenho, facilita a manutenção do código e oferece uma maior facilidade de aprendizado para desenvolvedores novos no projeto.
- **Styled Components**: Usado para escrever CSS-in-JS, proporcionando uma experiência mais dinâmica e eficiente para a estilização dos componentes.
- **Prettier, ESLint, & Husky**: Essas ferramentas foram usadas para garantir a consistência do código e evitar bugs, além de forçar a conformidade com as regras de estilo antes de cada commit.
- **Axios**: Utilizado para fazer requisições HTTP à API do TheMovieDB.

## 🌟 Resultados do Lighthouse

A aplicação foi otimizada para oferecer a melhor experiência ao usuário, alcançando altas pontuações em Performance, Acessibilidade, Boas Práticas e SEO, conforme verificado pelo Lighthouse do Google Chrome.

### Performance Desktop
<p align="center">
  <img src="public/images/github/lighthouse-desktop.png" alt="Lighthouse Desktop Results">
</p>

### Performance Mobile
<p align="center">
  <img src="public/images/github/lighthouse-mobile.png" alt="Lighthouse Mobile Results">
</p>

## 📧 Contato

Seu Nome - fernando.ufv14@gmail.com

Projeto Link: [https://github.com/fernandorcoelho/cubos-movies-app](https://github.com/fernandorcoelho/cubos-movies-app)
