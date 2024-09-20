/*for(let i = 0; i <= 10; i++){
    console.log(i);
}*/

/*let contador =0;

for(let i = 1; i <= 100; i++){
     if( i % 3 === 0){
        console.log(i)
        contador++
     }
}


console.log(`Existem ${contador} multiplos de 3 entre 1 e 100`)*/



for(let i = 2; i <= 50; i++){
    let primo = true;

    for(let j = 2; j < i; j++){
        if(i % j === 0){
            primo = false;
            break;
        }
    }
    
    if(primo){
        console.log(i + ' É primo')
    }
}
