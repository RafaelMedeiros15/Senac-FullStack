/* Arrow Function

/* Arrow function são uma maneira mais concisa(resumida/simples) de escrever funçãoes em javascript


Função Normal

function saudacao (nome){
     return('Olá '+ nome);
}

 console.log(saudacao('Douglas'))



const saudacao = (nome) => `Olá ${nome}`

 console.log(saudacao('Rafael'))*/

//##############################################################################

/* Function Declatation

 function nome(a,b){
     console.log(`Olá ${a}, tudo bem ? Muito prazer ${b}`)
 }

 nome('Rafael', 'Medeiros')

 
 const nome = (a,b) => {
     console.log(`Olá ${a}, tudo bem ? Muito prazer ${b}`)
     }
     
     nome('Rafael', 'Medeiros')*/

     
// Arrow Function
     
// const saudacao = (nome) => `Olá, ${nome}`

// console.log(`${saudacao('Rafael')}`)

//##############################################################################

/* FUNCTION EXPRESSION

const dobrar = function(x){
     console.log(x*2)
}

dobrar(5);


// Arrow Function

const dobrar2 = x => x*2
console.log(dobrar2(5))*/

//##############################################################################

/*Function Declaration

const saudacao = function(nome, idade){
     console.log('Olá ' + nome)
     console.log('Você tem ' + idade + ' anos')
}

saudacao('Rafael', 33)


 Arrow Function

const saudacao2 = (nome, idade) =>{
     console.log('Olá ' + nome)
     console.log('Você tem ' + idade + ' anos')
}

saudacao2('Rafael', 33)*/

//##############################################################################

// Function declatarion

/*const quadrado = function(n){
     console.log(n*2)
}
quadrado(4)

Arrow Function

const quadrado2 = n  => n*n;
console.log(quadrado2(6))*/
