/*Substituir o conteúdo da Div usando função

const obj = document.getElementById('conteudo')

function change(){
    obj.innerHTML = '<p><b>Rafael</b></p> '
}*/

//#####################################################################

// Criando mais uma li

const ul = document.getElementById('itens')

const li = document.createElement('li')

const texto = document.createTextNode('item 3')

function adicionar(){

    // Adiciona mais uma li no fim da ul

    // ul.appendChild(li)
    // li.textContent = 'Item 3'


    // Adicionar mais uma li no inicio da ul
    li.appendChild(texto)
    ul.insertBefore(li, ul.children[0]) //inserindo no indice 0  da ul
}

function remover(){
    ul.removeChild(li)
}
