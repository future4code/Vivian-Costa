// Exercicio 3 - Leia o código abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

/* a. O que a primeira linha está fazendo?
Resposta: A primeira linha, tem uma variável que esta  convertendo uma string para número e recebendo o valor de um usuário.

b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
Resposta: A mensagem sera: "Esse número passou no teste" e se o número for -10, a mensagem sera:  underfined

c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Resposta: Sim, pois a variável mensagem esta dentro do de um bloco e o console.log(mensagem), esta fora desse bloco. Por ele estar fora, é como
se não existisse nenhuma variável para o console imprimir.
*/

