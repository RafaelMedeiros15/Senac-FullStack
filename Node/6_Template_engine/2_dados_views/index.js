//ABRINDO O SERVIDOR

const express = require('express');
const exphbs = require('express-handlebars')
const port = 3000;

const app = express();

app.use(express.static("public"))

app.engine('handlebars', exphbs.engine());

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home', {auth: true})
});

app.get('/perfil', (req, res) => {
    res.render('perfil')
});


app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
});