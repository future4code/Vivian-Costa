//a. Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas

let listaDeTarefas = []

//b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

alert("Fale 3 tarefas voce precisa realizar hoje: ")
const tarefa1 = prompt("Fale a primeira tarefa: ")
const tarefa2 = prompt("Fale a segunda tarefa: ")
const tarefa3 = prompt("Fale a terceira tarefa: ")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

//c. Imprima o array na tela

console.log(listaDeTarefas)

//d. Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 

const indiceTarefa = prompt("Qual das 3 tarefas voce ja realizou? Digite 0- para a primeir, 1- para a segunda e 2- para a terceira: ")

//e. Remova da lista o item de índice que o usuário escolheu.

const tarefaIndice = Number(indiceTarefa)
listaDeTarefas.splice(tarefaIndice, 1)

//f. Imprima o array na tela

console.log(listaDeTarefas.splice(tarefaIndice, 1))
