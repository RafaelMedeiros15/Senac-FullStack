/*let numero = [10, 20, 30, 40, 50];
// console.log(numero.length)

for(let i=0; i<numero.length; i++){
    console.log(numero[i])
}*/

/*let alunos = []

for(let i=0; i<10; i++){
    let aluno = Number(prompt('Informe o número: '))
    alunos.push(aluno);
}

for(let i=0; i<alunos.length; i++){
    document.write(`Os valores são ${alunos[i]} <br>`)
}*/

/*let valores = [];
let soma = 0;

for(let i=0; i<10; i++){
    let numero = Number(prompt('Informe um número: '));
    valores.push(numero);
    soma += valores;
}

document.write(`A soma dos valores é ${soma} <br>`)*/


/*let numeros = []
let limite = Number(prompt('Digite um número: '))
let contador = 0;

for(let i=0; i<10; i++){
    let numero = Number(prompt('Digite 10 números: ' + (i + 1) + ':'))
    numeros.push(numero);

    if(numero > limite){
        document.write(`Os números maiores que ${limite} são ${numero} <br>`)
        contador++;
    }
}

document.write(`A quantidade de números é: ${contador} `)*/

let numeros = []

for (let i=0; i<10; i++){
    numeros[i] = Number(prompt('Informe 10 número' + (i+1) + ':'))
    document.write('O resultado é: ' + numeros[i] * 2 + '<br>')
}


