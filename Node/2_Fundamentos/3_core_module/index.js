const path = require('path'); //Path fornece utilitários para manipular e interagir com caminhos de arquivos e diretórios de forma eficiente e independente do sistema operacional. 

const {exit} = require('process') //Exit é uma função do módulo process que permite encerrar o node.js.

const extension = path.extname('arquivo.php') //extname identifica o tipo do arquivo que o usuário insere.

console.log(extension)  