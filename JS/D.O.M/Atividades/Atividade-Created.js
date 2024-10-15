// crie um nova li com texto "item 2" e a inclua na ul de div com class .alvo

//Mova a última li de orignal para alvo (mas antes da primeira li). 
//Em outras palavras, a última li da original deve virar a primeira li de alvo

//altere o texto da primeira li de .alvo para "item 0"

//clone a ul de .original e a inclua na primeira li de .alvo

//remova a ultima li (item2) da lista inserida na etapa anterior

//remova as duas li's que sobraram na ul original

const ul1 = document.getElementById('lista1')
const ul2 = document.getElementById('lista2')

const item1 = document.getElementById('item1')
const item2 = document.getElementById('item2')
const item3 = document.getElementById('item3')

const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')

const item0 = document.getElementById('item0')

ul1.removeChild(item1)
ul1.removeChild(item2)
ul1.removeChild(item3)

item0.appendChild(li1)

ul2.appendChild(li2)
ul2.appendChild(li3)

li2.textContent = 'Item 1'
li3.textContent = 'Item 2'

item0.textContent = 'Item 0 '

item0.appendChild(item1)