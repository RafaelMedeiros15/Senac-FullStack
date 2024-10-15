// Função auto invocável

(function(){
    const nomeUsuario = 'Rafael'

    document.querySelector(".cmain").textContent = "Bem vindo" + nomeUsuario;

    const elemento = document.querySelector('.cmain')

})()


(function(){
    const nomeUsuario = 'Rafael'

    const elemento = document.querySelector('.cmain')

    elemento.innerHTML += '<b>' + nomeUsuario + '</b>';

})()

// a diferença entre o .textContent e o .innerHTML é que o .innerHTML renderiza as tags do html e no .textContent não