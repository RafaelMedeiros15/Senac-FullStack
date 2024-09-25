            // Trablhando com Arrays

const alunos = ['Will', 'Gio', 'Rafael'];

console.log(alunos.indexOf('Will'));

alunos.unshift('Thalisson');
console.log(alunos);

alunos.push('Victor');   
console.log(alunos);
console.log(alunos.indexOf('Victor'));

// console.clear();

alunos.shift();
console.log(alunos);

alunos.pop();

// console.log(alunos)

// alunos[4] = 'Marcos'
// alunos[0] = 'Luana'

console.log(alunos.length)

alunos.concat ('Aaaa', 'BBbbbbb')

console.log(alunos)


// alunos.length  ------> Informa o comprimenro(tamano) do array.
// alunos.unshift   -------> Adiciona valores no início.
// alunos.push  --------> Adiciona valores no finally.
// alunos.pop --------> Remova o último indice. 
// alunos.shift ---------> Remova o primeiro indice. 
// indexof('x') ----------> Mostra o valor do indice. 
// delete alunos[x] ----------> Apaga o valor que está no indice e deixa o indice em branco(vazio).
// console.log(alunos.sort())  ---------> Organiza os indices por ordem alfabética.