/*
    EXERCÍCIO 1

let numero = parseInt(prompt('Digite um número: '))

do{
    document.write((numero--) + '<br>');
    
}while(numero > 100)*/

/*
    EXERCÍCIO 2

let contador = 0; //Contador para controlar  quantos número foram insediros;

while(contador < 10){
    let numero = parseInt(prompt('Digite um número real: '))

    let quadrado = numero**2

    document.write('O quadrado de' + numero + 'É: ' + quadrado.toFixed(2))
}*/


/*EXERCÍCIO 3

let idade = 0

do {

    idade = parseInt(prompt('Digite sua idade: '))  //Solicita a idade do usuário
    


    if(idade < 0 || idade > 100){
        alert('Digite uma idade válida: ')

        idade = 0
    }

    
} while (idade == 0);

document.write(idade)*/



// Exercício 4

let divida = parseInt(prompt('Digite o valor da sua dívida: ')) //Solicita a dívida;

// Verfificar se o susário tem dívida;

while (divida > 0) {
    document.write(`Você deve ${divida.toFixed(2)}`) //Exibe o valor atual da dívida

    let pagamento = parseFloat(prompt('Digite o valor que deseja pagar: ')) //Solicita o valor do pagamento;


    if(pagamento > divida || isNaN(pagamento)){
        console.log('Você não pode pagar mais do que a dívida. Tente um valor menor.')
    }else if(pagamento <= 0){
        console.log('O pagamento deve ser maior que 0!')
    }else{
        divida -= pagamento     //Subtrai o valor pago da dívida
        document.write(`pagamento de R$ ${pagamento.toFixed(2)} realizado`)
    }
    
}

document.write('Parabéns sua dívida foi quitada')