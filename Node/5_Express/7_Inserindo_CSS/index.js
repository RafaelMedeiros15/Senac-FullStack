const express = require('express');

const app = express();

const port = 3000;

const path = require('path')    

const basePath = path.join(__dirname, 'meusTemplates')  //path.join (cria um caminho completo para a pasta meusTemplates). Dirname ( diretorio atual)

const users = require('./users')

app.use(
    express.urlencoded({
        extended: true
    }),
)

app.use(express.json())

app.use(express.static('public'))

app.use('/users', users)

app.get('/',(req, res) => { //app.get é a forma como faço a requisição do tipo get
    res.sendFile(`${basePath}/index.html`) //Res(resposta) SendFile(EnviarArquivo) res.sendFile= Envia um arquivo html como resposta ao navegador inves de uma mensagem de texto.
})

app.listen(port, () => console.log(`Servidor rodando na porta 3000 ${port}`))