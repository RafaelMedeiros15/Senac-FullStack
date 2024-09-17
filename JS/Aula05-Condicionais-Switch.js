/*let DiaDaSemana = prompt('Digite o dia da semana: ')

switch(DiaDaSemana){
    case '1':
        alert('Domingo');
        break;
    
    case '2':
        alert('Segunda-Feira');
        break;
    
    case '3':
        alert('Terça-Feira');
        break;
    
    case '4':
        alert('Qarta-Feira');
        break;
    
    case '5':
        alert('Quinta-Feira');
        break;
    
    case '5':
        alert('Seita-Feira');
        break;
    
    case '6':
        alert('Sabado');
        break;
    
    default:
        alert('Você não digitou números entr 1 e 7')
    
}*/



                // ATIVIDADE


/*let numero = parseInt(prompt('Digite uma nota de 0 à 100: '))


switch (true){
    case (numero >= 90 && numero <= 100):
        alert('Você tirou nota: A!')
        break;
        
    case (numero >= 80 && numero < 90):
        alert('Você tirou nota: B!')
        break;
        
    case (numero >= 70 && numero < 80):
        alert('Você tirou nota: C!')
        break;
        
    case (numero >= 60 && numero < 70):
        alert('Você tirou nota: D!')
        break;

    case (numero >= 50 && numero < 70):
        alert('Você tirou nota: E!')
        break;

    case (numero >= 0 && numero < 50):
        alert('Você tirou nota: F!')
        break;

    default : 
        alert('Digite um número válido!')

} */

                // ATIVIDADE

let signo = prompt('Informe seu signo:')

switch(signo.toLocaleLowerCase()){
    case 'aries':
        alert('Você nasceu entre 21/03 a 20/04 e seu planeta é Marte')
        break;
        
    case 'touro':
        alert('Você nasceu entre 21/04 a 20/05 e seu planeta é Vênus')
        break;

    case 'gemeos':
        alert('Você nasceu entre 21/05 a 20/06 e seu planeta é Mercúrio')
        break;

    case 'cancer':
        alert('Você nasceu entre 21/06 a 21/07 e seu planeta é Lua')
        break;

    case 'leao':
        alert('Você nasceu entre 22/07 a 22/08 e seu planeta é Sol')
        break;

    case 'virgm':
        alert('Você nasceu entre 23/08 a 22/09 e seu planeta é Mercúrio')
        break;

    case 'libra':
        alert('Você nasceu entre 23/09 a 22/10 e seu planeta é Vênus')
        break;

    case 'escorpiao':
        alert('Você nasceu entre 23/10 a 21/11 e seu planeta é Marte')
        break;

    case 'sagitario':
        alert('Você nasceu entre 22/11 a 210/12 e seu planeta é Júpter')
        break;

    case 'capricornio':
        alert('Você nasceu entre 22/12 a 20/01 e seu planeta é Saturno')
        break;

    case 'aquario':
        alert('Você nasceu entre 21/01 a 19/02 e seu planeta é Urano')
        break;

    case 'peixes':
        alert('Você nasceu entre 20/02 a 20/03')
        break;

        
}