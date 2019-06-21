//APP.JS PASSOU A SER INDEX.JS POR CAUSA DO NODEMON
const express = require('express'); //Importando Express

const port = 3000; //Servidor rodando na porta 3000

const path = require('path');

const app = express(); //Recebendo a instância do Express para utilizar seus comandos

const CurriculoController = require('./controllers/curriculo-controller');


app.use(express.static(path.join(__dirname, 'public')));

//Setup da view engine (EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
    res.render('index', {
        title: "Meu currículo em NodeJS",
        version: "0.0.0"
    });
});

app.get('/curriculo',(req, res, next) => {
    const curriculoData = CurriculoController.getData();
    res.render('curriculo', curriculoData);
});


app.listen(port, err => { //Dizemos ao servidor para que fique “escutando” (listen) a porta (port, que é 3000)
    console.log(`Server running on port ${port}`);
})