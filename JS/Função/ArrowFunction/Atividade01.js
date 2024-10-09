/* 01 - Arrow Function que recebe um número e retorne o dobro desse numero

const dobro = n => n*2

console.log(dobro(3))*/


//########################################################################

/*02 -  Recebe um nome e retorne uma saudação

const saudacao = nome => `Olá ${nome}`

console.log(saudacao('Rafael'))*/


//########################################################################

/*03 - converta em arrow function

const soma = function (a,b){
    console.log(a+b)
}

soma(5,6)

const soma2 = (a, b) => a + b
console.log(soma(5,7))*/


//########################################################################

/*04 - Escreva uma Aerrow Function que vai receber uma número e vai retornar se é par ou impar

const parImpar = n => n%2 == 0
    console.log(parImpar(8) ? `par` : `impar`)*/

//########################################################################

/*05 - Dado um array de 10 numeros use uma arrow function para filtrar apenas os números pares sem usar if/else e operador ternário

let numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const pares = numeros.filter( n => n %2 ===0)
console.log(`Esses são o números pares ${pares}`)*/

//########################################################################

/*06 - escreva um aerrow function que ordene uma array de palavras pela quantidade de letras do menor para maior

let nomes = ['Rafael', 'Douglas', 'Luana', 'Marcos', 'Will']

const letras = nomes.sort((a,b) => a.length - b.length)

console.log(letras)*/

//########################################################################

//07 - Implemente um arrow function que filtra todos os numeros primos de um array de inteiros

// primo é divisivel por 1 e por ele mesmo

/*const isPrimo = (num, div = 2) => num < 2 ? false : (div * div > num ? true : num % div === 0 ? false : isPrimo(num, div +1));

const filtrarPrimos = arr => arr.filter(isPrimo);

console.log(filtrarPrimos([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]))*/

const isPrimo = num => {
    const verificarPrimo = (num, div = 2) =>
        num < 2 
            ? false 
            : div * div > num
                ? true
                : num % div === 0
                    ? false
                    :verificarPrimo(num, div+1)
    return(verificarPrimo(num))
}

const filtrarPrimos = arr => arr.filter(isPrimo);

console.log(filtrarPrimos([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));