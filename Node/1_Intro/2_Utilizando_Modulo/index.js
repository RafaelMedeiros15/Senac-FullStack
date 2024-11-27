const fs = require('fs');  //fs é File System (Arquivo do Sistema)

fs.readFile('arquivo.txt', 'utf8', (err,data) =>{   //utf8 são as normas abnt para o texto sair correto
    if(err){
        console.log(err)
    }
    console.log(data)
})