const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readLine.question('Qual a sua linguagem preferida?', (language) =>{
    console.log(`A minha longuagem preferida é: ${language}`)

    readLine.close()
})