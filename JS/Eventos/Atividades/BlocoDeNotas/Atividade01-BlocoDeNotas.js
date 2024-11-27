const botao = document.getElementById('criar')

const container = document.getElementById('container')

const bloco = document.createElement('div')




function novo(){
    const novaDiv = document.createElement('div')
    novaDiv.className = 'novaDiv';
    novaDiv.contentEditable = true;
    novaDiv.textContent = 'Escreva sua nota aqui...';
    container.appendChild(novaDiv)

    // novaDiv.style.width = '200px'
    // novaDiv.style.height = '100px'
    // novaDiv.style.backgroundColor = 'yellow'
}

botao.addEventListener('click', novo)