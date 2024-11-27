const inputPaciente = document.getElementById('inputPacient');
const consulta = document.getElementById('btnConsulta');
const prioridade = document.getElementById('btnUrgencia');
const atender = document.getElementById('btnAtender');
const pacienteAtendimento = document.getElementById('pacienteEmAtendimento');
const outConsulta = document.getElementById('outConsulta');


let todosPacientes = [];

function marcarConsulta(){

    let nomePaciente = inputPaciente.value;

    if(nomePaciente == ''){     // se nomePaciente estiver vazio 
        alert('Digite o nome do paciente'); // aparece um alerta informando para digitar o nome
        inputPaciente.focus() 
        return;  //Return interrompe a função
    }

    todosPacientes.push(nomePaciente);  //Insere os nomes dos paciente no inicio do array

    let lista = ''
    for(let i = 0; i < todosPacientes.length; i++){
        lista += `${(i + 1)}. ${todosPacientes[i]}\n`
    }

    outConsulta.textContent = lista;

    inputPaciente.value = '';
    inputPaciente.focus();

}

consulta.addEventListener('click', marcarConsulta);


/*Função que adiciona um paciente à fila como prioritário
O paciente é inserido no inicio da fila*/


function atendimentoPrioritario(){

    let nomePaciente = inputPaciente.value;

    if(nomePaciente == ''){     // se nomePaciente estiver vazio 
        alert('Digite o nome do paciente'); // aparece um alerta informando para digitar o nome
        inputPaciente.focus() // Quando fechar o alerta o cursur ja indica onde o paciente tem que digitar o nome
        return;  //Return interrompe a função
    }

    todosPacientes.unshift(nomePaciente); //Colocando o paciente no inicio da fila

    let lista = ''
    for(let i = 0; i < todosPacientes.length; i++){
        lista += `${(i + 1)}. ${todosPacientes[i]}\n`
    }

    outConsulta.textContent = lista;

    inputPaciente.value = '';
    inputPaciente.focus();
}

prioridade.addEventListener('click', atendimentoPrioritario);


// Fazer o atendimentodo do paciente e retirar da lista de espera

function atenderPaciente(){

    if(todosPacientes.length == ''){     
        alert('Não há pacientes para atender'); 
        inputPaciente.focus() 
        return;  
    }

    let atender = todosPacientes.shift();

    pacienteAtendimento.textContent = atender;

    let lista = ''
    for(let i = 0; i < todosPacientes.length; i++){
        lista += `${(i + 1)}. ${todosPacientes[i]}\n`
    }

    outConsulta.innerHTML = lista;
}

atender.addEventListener('click', atenderPaciente);