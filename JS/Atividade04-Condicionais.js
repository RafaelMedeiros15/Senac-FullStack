/*let peso = parseFloat(prompt('Dgite seu peso! OBS: Digite apenas números'))
let altura = parseFloat(prompt('Digite sua altura! OBS: Digite apenas números'))

let imc = peso / (altura*altura)

if(imc < 18.5){
    alert(`Seu IMC é ${imc.toFixed(2)}! Você está abaixo do peso!`)

}else if(imc >= 18.5 && imc <= 25){
    alert(`Seu IMC é ${imc.toFixed(2)}! Você está no peso ideal!`)
}else if(imc >= 25 && imc <= 29.9){
    alert(`Seu IMC é ${imc.toFixed(2)}! Você está com sobrepeso!`)
}else if(imc.toFixed(2) >= 30){
    alert('Você está obeso!')
}else{
    alert('Digite apenas números')
}*/

/*a soma de 2 lados do triangulo deve ser maior que um dos lados
(L1+L2)>Lado 3
(L2+L3)>Lado 1
(L1+L3)>Lado 2*/

/*Escreva um programa que receba três valores com os lados de um triângulo e determine se eles podem formar um triângulo válido. Além disso, verifique se o  triângulo é quilátero, isósceles ou  escaleno*/

let L1 = Number(prompt('Digite um número'))
let L2 = Number(prompt('Digite outro número'))
let L3 = Number(prompt('Digite mais um número'))

let soma = L1 + L2 + L3

if(L1 < 0 || L1 > 10 || L2 < 0 || L2 > 10 || L3 < 0 || L3 > 10){

    alert('Digite um número entre 1 e 10')
    
}else if(L1+L2>L3 && L2+L3>L1 && L1+L3>L2){
    if (L1 === L2 && L2 === L3) {
        alert('O triangulo é equilátero')
    }else if(L1 === L2 || L1 === L3 || L2 === L3){
        alert('O triangulo é isosceles')
    }else{
        alert('o triangulo é escaleno')
    }
} else{
    alert('A lados fornecidos não formam um triangulo')
}