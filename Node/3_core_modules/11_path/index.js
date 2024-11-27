const path = require('path')

const customPath = "/relatorios/pasta1/relatorio1.pdf"

console.log(path.dirname(customPath))

console.log(path.basename(customPath))  //retorna o nome do arquivo e a extensão.

console.log(path.extname(customPath))   //Qual é a extensão do arquivo (pdf/mp4/...)