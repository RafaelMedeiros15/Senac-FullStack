const fs = require('fs')

if(!fs.existsSync('./minhapasta')){
    console.log('Não existe!')

    fs.mkdirSync('minhapasta')  //mkdirSync cria a pasta
}

if(fs.existsSync('./minhapasta')){
    console.log('Existe')
}