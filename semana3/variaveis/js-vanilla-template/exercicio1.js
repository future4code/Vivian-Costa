let nome = prompt ("Qual e o seu nome? ")
let idade = prompt ("Qual e a sua idade")

typeof nome;
typeof idade;

// resposta D: o valor impresso foi Underfined, isso acontece quando a variavel esta vazia, nao possui nenhum valor atribuido.

//console.log( nome, idade); 
console.log(typeof nome, idade) //ao imprimir esse console, apareceu somente o tipo da variavel que e String e a idade que e 30.
console.log("Ola ", nome, "voce tem ", idade, "anos!")
