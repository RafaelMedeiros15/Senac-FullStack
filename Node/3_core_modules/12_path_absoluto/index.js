const path = require('path')       //Utilizado para identificar a rota do arquivo.

console.log(path.resolve('arquivo.txt'))    //.resolve é para obter o caminho do arquinho

const midFolder = 'relatorios'

const fileName = 'arquivo.txt'

const finalPath = path.join('/', 'arquivos', 'midFolder', 'fileName')   //join é para concatenar

console.log(finalPath)