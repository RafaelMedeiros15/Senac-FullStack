const base = document.getElementById('base')
const altura = document.getElementById('altura')
const output = document.getElementById('output')
let forms = document.getElementById('forms')

function calcularArea(event){
    event.preventDefault();
    let baseValue = base.value;
    let alturaValue = altura.value;

    let area = (baseValue * alturaValue)/2;

    output.innerHTML = (`Área é ${area}cm`)
}

forms.addEventListener('submit', calcularArea());

function limparArea(){
    output.innerHTML = ' '
    document.getElementById('base').value = ' '
    document.getElementById('altura').value = ' '
}

