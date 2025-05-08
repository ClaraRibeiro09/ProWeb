const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`Acesso à rota: ${req.method} ${req.url}`);
  next();
});

const homeMiddleware = (req, res) => {
  res.send('<h1>Página Home</h1>');
};


const signinMiddleware = (req, res) => {
  res.send('<h1>Página Signin</h1>');
};

const signupMiddleware = (req, res) => {
  res.send('<h1>Página Signup</h1>');
};

const aboutMiddleware = (req, res) => {
  res.send('<h1>Página About</h1>');
};

app.get('/', homeMiddleware);


app.get('/signin', signinMiddleware);


app.get('/signup', signupMiddleware);


app.get('/about', aboutMiddleware);

app.get('/users/:userid?', (req, res) => {
  const userId = req.params.userid;
  if (userId) {
    res.send(`<h1>Bem-vindo, usuário ${userId}!</h1>`);
  } else {
    res.redirect('/signup');
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});