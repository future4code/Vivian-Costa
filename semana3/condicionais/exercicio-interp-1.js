//EXERCÍCIO 1 - Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

/* Explique o que o código faz. Qual o teste que ele realiza? 
Resposta: O código pega os números e verifica se o reto da divisão por 2 for igual a 0, significa que "passou no teste", se não for, significa que "não passou no teste".

Para que tipos de números ele imprime no console "Passou no teste"? 
Resposta: números pares

Para que tipos de números a mensagem é "Não passou no teste"?
Resposta: números ipares

*/