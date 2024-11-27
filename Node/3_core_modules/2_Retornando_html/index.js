const http = require("http")

const port = 3000

const server = http.createServer((req, res) =>{
    res.statusCode = 200

    res.setHeader('Content-Type', 'text/html', 'UTF-8')

    res.end('<h1>Olá, este é o meu primeiro server com html</h1> <p>Não aguento mais essa aula</p>')
})

server.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`)
})