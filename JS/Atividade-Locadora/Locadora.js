const filme = document.getElementById('inputFilme')
const tempo = document.getElementById('inputTempo')
const botao = document.getElementById('btn')
const mostrarFilme = document.getElementById('outFilme')
const mostrarTempo = document.getElementById('outTempo')


function converter(){

    const nomeDoFilme = filme.value;
    const tempoFilme = Number(tempo.value);

    const horas = Math.floor(tempoFilme / 60);
    const minutosDuracao = tempoFilme % 60;

    mostrarFilme.textContent = nomeDoFilme;
    mostrarTempo.textContent = `Hora(s)${horas} e ${minutosDuracao} minuto(s) `;
    

    
}

botao.addEventListener('click', converter)


