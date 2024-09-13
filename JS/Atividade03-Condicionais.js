let n1 = Number(prompt('Digite um número'))
let n2 = Number(prompt('Digite um número'))
let n3 = Number(prompt('Digite um número'))
let p1 = 3
let p2 = 2
let p3 = 1


let media = ((n1*p1) + (n2*p2) + (n3*p3))/(p1+p2+p3)


if(n1, n2, n3 > 10 && n1, n2, n3 < 0){
    alert('Digite um número entre 0 e 10')
}else if(media >=5){
    alert(`Você passou, sua média foi ${media}`)
} else if(media <=5 && media >=4){
    alert(`Você está em recuperação, sua média foi ${media}`)
}else{
    alert('Você reprovou!')
}