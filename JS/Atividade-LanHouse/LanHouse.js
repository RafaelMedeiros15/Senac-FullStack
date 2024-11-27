const inputValor = document.getElementById('inputValor');
const inputTempo = document.getElementById('inputTempo');
const btn = document.getElementById('btn');
const mostrar = document.getElementById('mostrarInfo');

function calcularPreco (){
    const valorInserido = Number(inputValor.value);
    const tempoDesejado = Number(inputTempo.value);

    const valorDono = (valorInserido / 15);
    const tempoCliente = ( valorDono* tempoDesejado);

    mostrar.innerText = `Valor a Pagar: R$${tempoCliente.toFixed(2)}`;

}

btn.addEventListener('click', calcularPreco);