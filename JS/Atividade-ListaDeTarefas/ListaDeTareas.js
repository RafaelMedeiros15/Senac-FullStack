const inputTarefa = document.getElementById('inputTarefa');
const listaGeral = document.getElementsByClassName('listaGeral')[0];

const btnLimpar = document.getElementById('btnLimpar');


function addTarefa(){
    const tarefa = inputTarefa.value.trim();

    if(tarefa !==""){
        const li = document.createElement('li');
        li.textContent = tarefa;

        function removerTarefa(tarefa){
            tarefa.remove();
        };

        li.addEventListener('click', function(){
            removerTarefa(li);
        });

        listaGeral.appendChild(li)

        inputTarefa.value = "";
    }
}

inputTarefa.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        addTarefa();
    }
})

inputTarefa.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        const listaItens = document.querySelectorAll('li')

        listaItens.forEach(function(item){
            item.style.backgroundColor = '#e0e0e0'
        })
    }
})


function limparTarefa(){
    listaGeral.innerHTML = '';
}

btnClear.addEventListener('click', limparTarefa)