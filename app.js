const express = require('express'); //Importando Express

const port = 3000; //Servidor rodando na porta 3000

const app = express(); //Recebendo a instância do Express para utilizar seus comandos

app.get('/', (req, res, next) => { //Rota da HOME
    res.send({
        title: "Meu currículo em Node",
        version: "0.0.0"
    });
});

app.listen(port, err => { //Dizemos ao servidor para que fique “escutando” (listen) a porta (port, que é 3000)
    console.log(`Server running on port ${port}`);
})