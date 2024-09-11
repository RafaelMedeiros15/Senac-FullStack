let frase = prompt('Digite uma frase: '); //pedir pro usuario digitar algo

 console.log(frase);

let comprimento = frase.length //saber quantos caracteres tem na frase

let maiúsculo = frase.toLocaleUpperCase() //transforma a frase em mainúsculo

let minúsculo = frase.toLocaleLowerCase() //transformar a frase em minúsculo

let separar = frase.split(' ') //separa a frase pelos espaços

let batata = frase.slice(5)

console.log(`Sua frase possui ${comprimento} caracteres`) 

console.log(`Sua frase em minúsculo: ${minúsculo}`)

console.log(`Sua frase em minúsculo: ${maiúsculo}`)

console.log(`Sua frase separada: ${separar}`)

console.log(`Sua frase sem os primeiros digitos: ${batata}`)

console.log(frase.charAt(0)) // informa o carctece 
