const express = require('express');     //importando o express

const exphbs = require('express-handlebars');   //importando o express-handlebars

const app = express();    //Armazenando o express a uma variável

const moment = require('moment-timezone')

const User = require('./model/User');

const conn = require('./db/conn');  //Armazenando a conexão com o banco de datos

const port = 3000;

app.engine('handlebars', exphbs.engine());  //Para fazer a leitura dos arquivos Handlebars

app.use(
    express.urlencoded({
        extended: true
    })
);

app.set('view engine', "handlebars");   //Para visualizar os arquivos Handlebars

app.use(express.static('public'));  //Para trabalhar com os arquivos css

app.get('/user/create', (req,res) => {
    res.render('adduser')
});

app.post('/user/create', async (req,res) =>{
    try{
        const formattedDate = moment.tz(req.body.date_of_birth, 'YYYY-MM-DD', 'America/Sao_Paulo').toDate();

        const user = await User.create({
            name: req.body.name,
            occupation: req.body.occupation,
            date_of_birth: formattedDate,
            newsletter: req.body.newsletter === 'on',
        });
        res.redirect('/user/create')
    } catch(err){
        console.log(err)
        res.status(500).send('Erro ao criar usuário')
    }
});

app.get('/user/listauser', async (req, res) => {
    try{
        const users = await User.findAll({raw: true});
        res.render('listauser', {users})
    } catch(err) {
        console.log(`Erro ao buscar usuário: `, err);
        res.status(500).send(`Erro ao carregar a lista de usuários`)
    }
});


app.get('/user/:id', async (req, res) => {
    try{
        const id = req.params.id
            if(isNaN(id) || id <= 0){
                return res.status(400).send('Id Inválido')
            }

        const user = await User.findOne({raw: true, where: {id: id}});

        if(!user){
            return res.status(404).send('Usuário não encontrado');
        }


        res.render('userunique', {user})
    } catch(err) {
        console.log(`Erro ao buscar usuário: `, err);
        res.status(500).send(`Erro ao carregar dados do usuários`)
    }
});



app.get('/', (req,res) => {
    res.render('home')              //Pegue o arquivo "Home" e renderize
});

conn.sync().then(() => {
    app.listen(port, () =>{
        console.log(`Servidor rodando na porta ${port}`)
    })
}).catch((err) => {
    console.log(`Erro ao sincronizar om o banco de dados ${err}`)
});