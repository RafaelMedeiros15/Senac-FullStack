const express = require('express');

const router = express.Router();

const port = 3000;

const path = require('path');

const basePath = path.join(__dirname, '../meusTemplates')  //path.join (cria um caminho completo para a pasta meusTemplates). Dirname ( diretorio atual)


router.get('/add', (req, res) =>{
    res.sendFile(`${basePath}/usersform.html`)
});


router.post('/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name

    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`)

    res.sendFile(`${basePath}/usersForm.html`)
});


router.get('/:id', (req, res) =>{
    const id = req.params.id    //Extrai o parametro id da URL
    console.log(`Estamos buscando pelo usuário ${id}`)

    res.sendFile(`${basePath}/users.html`)
});

module.exports = router;