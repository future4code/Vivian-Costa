//EXERCÍCIO 5 - Escreva as funções explicadas abaixo:

//a. Escreva uma função que receba 2 números como parâmetros, e,
// dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// function somaNumeros(num1, num2){
//         const resultado = num1 + num2
//         console.log(resultado)
// }   
// const primeiroNum = Number(prompt("Insira o primeiro numero"))
// const segundoNum = Number(prompt("Insira o segundo numero"))
// somaNumeros(primeiroNum, segundoNum)



//b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

// function numeroMaiorIgual (numero1, numero2){
//     if(numero1 >= numero2) {
//         const maior = true
//         return maior
//     } else {
//         const menor = false
//         return menor
//     }
// }
//  const primeiroNumero = Number(prompt("Insira o primeiro numero"))
//  const segundoNumero = Number(prompt("Insira o segundo numero"))

// console.log(numeroMaiorIgual(primeiroNumero, segundoNumero))


//c. Faça uma função que recebe uma mensagem (string) como parâmetro e imprima essa mensagem 10 vezes. 
//(não é permitido escrever 10 console.log dentro da função, use outra estrutura de código para isso)

function repeteFrase (f){
    const frase = f 
    for(let i = 0; i < 10; i++ ) {
        console.log(frase)
    }

}
const entradaFrase = prompt("Digite uma frase")

repeteFrase(entradaFrase)


