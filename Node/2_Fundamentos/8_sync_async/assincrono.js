const fs = require('fs')

console.log('Inicio')

fs.writeFile('arquivo2.txt', 'oi', function(err){
    setTimeout(() => {
        console.log('Arquivo criado')
    }, 5000);
})

console.log('fim')