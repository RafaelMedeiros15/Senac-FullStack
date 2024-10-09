/* Declarando o objeto

// let variavel = {propriedade = 'valor'}

let carro = {
    cor : 'Vermelho',
    ano : 2005,
    modelo : 'SUV',
    marca : 'Fiat'
}

carro.marca = 'Volksvagem';     //Mudando o valor(volwsvagem);

carro.aro = 14;     //Adicionando propriedade(aro) e valor(14);

console.log(carro)*/


//########################################################################################

/*const pessoa = {
    nome : 'Rafael', 
    idade : 25,
        endereco : {
            rua : 'Av. Ayrton Senna',
            numero : 3037,
            bairro : 'Neópolis',
            estado : 'RN'
        }
}*/


/*delete pessoa.nome    

console.log(pessoa)


// Métodos são funcções

pessoa.falarNome = function(){
    return (`${this.nome} está falando seu nome.`)
}

console.log(pessoa.falarNome())*/



/*
const obj2 = new Object();
obj2.nome = 'Gabriel';
obj2['idade'] = 22;
console.log(obj2)


const carro = {
    modelo : 'SUV',
    marca : 'Toyota',
    cor : 'Preto',
    ano : 2023,
    potencia : '2.0'
}

document.write(`O carro é do modelo: <strong>${carro.modelo}</strong> <br>`)
document.write(`A marca do carro é: <strong>${carro.marca}</strong> <br>`)
document.write(`A cor do carro é: <strong>${carro.cor}</strong> <br>`)
document.write(`O ano do carro é: <strong>${carro.ano}</strong> <br>`)
document.write(`A potencia do carro é: <strong>${carro.potencia}</strong> <br>`)*/


// Declare um objeto, peça ao usuário nome, idade, altura e mostre no objeto

const usuario = {
    nome : '',
    idade: '',
    altura:'',
}

usuario.nome = prompt('Informe seu nome:')
usuario.idade = prompt('Informe seu idade:')
usuario.altura = prompt('Informe sua altura:')

while(usuario.nome != String){
    usuario.nome = prompt('Digito inválido informe seu nome:')
}


document.write(`O nome do usuário é ${usuario.nome} <br> idade dele é ${usuario.idade}<br> e altura ${usuario.altura}`)