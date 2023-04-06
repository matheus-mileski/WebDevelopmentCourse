const express = require('express');
const app = express();

const models = require('./models');

models.sequelize.sync().then(function () {
    console.log("A base de dados foi sincronizada!")
}).catch(function (err) {
    console.log(" > Existe um problema em sincronizar a base de dados!", err);
});

/*
models.sequelize.sync({
    force: true, // Cuidado: executa um drop nas tabelas antes de recriá-las (true or false)
    logging: false
})
*/

app.get('/', function (req, res) {
    res.send("Seja bem-vindo a Richard Airlines!");
});

app.listen(3500, function() {
    console.log("Express server iniciado!");
});

