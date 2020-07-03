<h1 align="center">
❓ Quizzera
</h1>
<p align="center">
Aplicação para testar os conhecimentos respondendo perguntas de temas diversos, usando uma stack MERN (MongoDB, Express, ReactJS, NodeJS).
</p>

<p align="center">
 <a href="https://mongoosejs.com/">
      <img src="https://img.shields.io/badge/mongoose-v5.7.7-darkgreen.svg" />
   </a>
   <a href="https://expressjs.com/">
      <img src="https://img.shields.io/badge/express-v4.17.1-red.svg" />
   </a>
   <a href="https://reactjs.org">
      <img src="https://img.shields.io/badge/react-v16.11.0-blue.svg" />
   </a>
   <a href="https://nodejs.org/en/">
      <img src="https://img.shields.io/badge/node-v14.03.0-green.svg" />
   </a>
</p>

> MERN é uma implementação Fullstack usando MongoDB, Express, NodeJS inseridas no Backend e React/Redux no Frontend

## :movie_camera: Demonstração da aplicação

[Vídeo no YouTube](https://www.youtube.com/watch?v=-_2nUwAjrNE)

## :camera: Capturas de tela

![](/screens/captura_185.png){:class="img-responsive"}
![](/screens/captura_185_1.png){:class="img-responsive"}
![](/screens/captura_185_2.png){:class="img-responsive"}

## :ballot_box_with_check: Funcionalidades

- [x] A aplicação deve listar questionários com diversas perguntas e respostas de múltipla escolha ou verdadeiro/falso.
- [x] Os questionários terão categorias/temas, dificuldades e quantidade de perguntas variados.
- [ ] Além disso, conforme os usuários forem utilizando a aplicação, serão mantidos diversos tipos de ranqueamentos:
- [ ] O mais rápido em responder corretamente (tempo médio para finalizar os quizzes).
- [ ] O mais certeiro de todos (somatória de respostas corretas, em todos os quizzes).
- [ ] O mais sagaz (somatória de respostas corretas em questionários de maior dificuldade. ex.: Quadro de medalhas - Ouro > Prata > Bronze).
- [x] CRUD usuário (parcial), faltou as operações de atualizar e deletar usuário.
- [x] Listar questionários de uma base de dados, local (ex.: arquivo dentro da aplicação) ou remota (ex.: api externas).
- [x] Filtrar questionários por categoria/temas, dificuldade (questionário/pergunta) e tipo de perguntas (múltipla escolha ou verdadeiro/falso).
- [x] Atribuir valores aos questionários ou perguntas de acordo com a dificuldade.
- [ ] Listar todos os usuário com base em ranques.
- [x] Os questionários devem ser respondidos em um tempo limite, após terem sido iniciados.
- [ ] O ranqueamento deve basear-se nas qualidades de [sagaz] > [certeiro] > [rápido], respeitando esta ordem e realizando o balanceamento caso hajam empates

## :electric_plug: Configurações

Para que você possa utilizar essa aplicação é necessário configurar o banco de dados (quem no nosso caso é o MongoDB), para isso basta colocar o seu banco.

> server/src/server.js

```
const uri = 'mongodb+srv://<username>:<password>@cluster0-<cluster>.mongodb.net/<database>?retryWrites=true&w=majority';

```

## :computer: Start

```terminal
$ cd quizzera  // pasta do projeto
$ cd server  // pasta do backend
$ yarn install       // instalar pacotes
$ cd client  // pasta do frontend
$ yarn install       // instalar pacotes
$ yarn start // "startar" aplicação server e client
```

## :radio_button: API

API usada para gerar perguntas automaticamente (com categoria, quantidade de perguntas, nível de dificuldade e tipo da pergunta) [OpenTDB](https://opentdb.com)

### :open_file_folder: Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
quizzera
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── config.js
│   │   │
│   │   ├── middleware/
│   │   │   └── verifyToken.js
│   │   │
│   │   ├── model/
│   │   │   └── User.js
│   │   │
│   │   ├── routes/
│   │   │   ├── index.js
│   │   │   ├── userRoutes.js
│   │   │   └── utils.js
│   │   │
│   │   └── server.js
│   │
│   ├── .babelrc
│   ├── .eslintrc
│   ├── .prettierrc.js
│   ├── package.json
│   └── yarn.lock
│
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.css
│   │   ├── index.html
│   │   └── manifest.json
│   │
│   ├── src/
│   │   ├── actions/
│   │   │   ├── actionsTypes.js
│   │   │   └── index.js
│   │   │
│   │   ├── api/
│   │   │   └── api.js
│   │   │
│   │   ├── assets/
│   │   │   ├── logos/
│   │   │   │    ├── comFundo.png
│   │   │   │    └── Fundo.png
│   │   │   └── shark.png
│   │   │
│   │   ├── components/
│   │   │   ├── Anchor/
│   │   │   │    ├── Anchor.js
│   │   │   │    ├── index.js
│   │   │   │    └── styles.module.scss
│   │   │   ├── Button/
│   │   │   │    ├── Button.js
│   │   │   │    ├── index.js
│   │   │   │    └── styles.module.scss
│   │   │   ├── Drawer/
│   │   │   │    ├── Drawer.js
│   │   │   │    ├── index.js
│   │   │   │    └── styles.module.scss
│   │   │   ├── Footer/
│   │   │   │    ├── Footer.js
│   │   │   │    ├── index.js
│   │   │   │    └── styles.module.scss
│   │   │   ├── Header/
│   │   │   │    ├── Header.js
│   │   │   │    ├── HeaderContainer.js
│   │   │   │    ├── index.js
│   │   │   │    └── styles.module.scss
│   │   │   ├── Main/
│   │   │   │    ├── Forms/
│   │   │   │    │    ├── LoginFormik.js
│   │   │   │    │    ├── index.js
│   │   │   │    │    ├── question.json
│   │   │   │    │    ├── quiz.json
│   │   │   │    │    └── styles.css
│   │   │   │    ├── Home/
│   │   │   │    │    ├── Home.js
│   │   │   │    │    ├── RegisterFormik.js
│   │   │   │    │    └── styles.module.scss
│   │   │   │    ├── index.js
│   │   │   │    ├── Main.js
│   │   │   │    ├── MainContainer.js
│   │   │   │    └── styles.module.scss
│   │   │   ├── Modal/
│   │   │   │    ├── index.js
│   │   │   │    ├── Modal.js
│   │   │   │    └── styles.module.scss
│   │   │   └── Quiz/
│   │   │       ├── Result/
│   │   │       │    ├── index.js
│   │   │       │    ├── QA.js
│   │   │       │    └── Stats.js
│   │   │       ├── Countdown.js
│   │   │       ├── Index.js
│   │   │       ├── Loader.js
│   │   │       ├── Main.js
│   │   │       ├── Offline.js
│   │   │       ├── Quiz.js
│   │   │       └── ShareButton.js
│   │   │
│   │   ├── constants/
│   │   │   ├── categories.js
│   │   │   ├── countdownTime.js
│   │   │   ├── difficulty.js
│   │   │   ├── index.js
│   │   │   ├── numOfQuestions.js
│   │   │   └── questionsType.js
│   │   │
│   │   ├── reducers/
│   │   │   └── index.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── utils/
│   │   │   ├── date.js
│   │   │   ├── grade.js
│   │   │   ├── randomNumbers.js
│   │   │   └── time.js
│   │   │
│   │   ├── index.js
│   │   ├── Routes.js
│   │   ├── serviceWorker.js
│   │   └── style.js
│   │
│   ├── styles/
│   │   └──  global-styles.scss
│   │
│   ├── .eslintrc
│   ├── .prettierrc.js
│   ├── package.json
│   └── yarn.lock
│
├── yarn.lock
├── .gitignore
├── package.json
└── README.md
```

## :octocat: Referências

**[Quiz-App](https://github.com/SafdarJamal/quiz-app)**
**[Blog-Mern](https://github.com/joaopedrodcf/blog-mern)**

<h2 align="center">
:wave: Sigam-me 
</h2>

<p align="center">
 <a href="https://instagram.com/pedroovfonseca">
      <img src="https://img.shields.io/badge/Follow%20%40pedroovfonseca-Instagram-C13584.svg" />
   </a>
   <a href="https://github.com/peidrao">
      <img src="https://img.shields.io/github/followers/peidrao.svg?style=social&label=Follow" />
   </a>
   <a href="https://twitter.com/peidrao)">
      <img src="https://img.shields.io/twitter/follow/peidrao.svg?style=social" />
   </a>

</p>
