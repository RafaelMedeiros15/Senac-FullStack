const express = require('express');

const app = express();

const port = 3000;

const path = require('path')    

const basePath = path.join(__dirname, 'meusTemplates')  //path.join (cria um caminho completo para a pasta meusTemplates). Dirname ( diretorio atual)


app.get('/users/:id', (req, res) =>{
    const id = req.params.id    //Extrai o parametro id da URL
    console.log(`Estamos buscando pelo usuário ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

const checkAuth = function (req, res, next){    
    req.authStatus = true

    if(req.authStatus){
        console.log('Está logado')
        next()
    }else{
        console.log('Não está logado, faça login para continuar')
    }
}

app.use(checkAuth)  //use está aplicando o midddleware

app.get('/',(req, res) => { //app.get é a forma como faço a requisição do tipo get
    res.sendFile(`${basePath}/index.html`) //Res(resposta) SendFile(EnviarArquivo) res.sendFile= Envia um arquivo html como resposta ao navegador inves de uma mensagem de texto.
})

app.listen(port, () => console.log(`Servidor rodando na porta 3000 ${port}`))