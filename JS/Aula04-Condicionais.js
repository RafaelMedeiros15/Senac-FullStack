        // CONDICIONAIS


/* if(1 > 0 || 2 > 3) {
         console.log(true)
 }else{
         console.log(false)
 } */

/* let isUserReady = confirm ('Are you ready?');
 if(isUserReady){
        alert("I'm ready")
 }else{
         alert('Not yet')
 } */


let n1 = Number(prompt('Digite a primeira nota: '))
let n2 = Number(prompt('Digite a segunda nota: '))

let media = (n1 + n2)/2;


/*if(media >= 5 ){
        alert(`Sua média foi: ${media}, você passou `)
}else if (media <=5 ){
        alert(`Sua média foi ${media}, você reprovou`)
}else{
        alert('Erro, digite apenas números')
}*/

if(media >5 ){
        alert('Você passou ' + media)
}else if(media >= 4 && media <= 5){
        alert('Você está em recuperação '+ media)
}else{
        alert('Você reprovou ' + media)
}