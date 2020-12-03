// EXERCÍCIO 2 - O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    //break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/* a. Para que serve o código acima?
Resposta: O código pega representa um sistema de caixa.

b. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
Resposta: 2.25

c. Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break 
que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?

Resposta: Ira imprimir todos os valores pós o produto pera.

*/