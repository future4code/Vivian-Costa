/* Exercicio 3 - Nas perguntas abaixo, considere que você tenha acesso a um array  (chamado de 'array original') que seja composto somente de números.
 Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente. */

 const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

 // A- Imprima cada um dos valores do array original - resposta item 
 
 /* 
 
 for (let numero of array) {
    if (numero > array) {
          console.log(numero)
      }
  } 

/*  

// B- cada um dos valores do array original divididos por 10 - 

/*

for(let i = 0 ; i < array.length; i++){
   {
    console.log(array[i]/10)
    }
  } 

*/

// C- Crie um novo array contendo, somente, os números pares do array original. 

/*

let novaArray = []

for(let i = 0 ; i < array.length; i++){
    if(array[i] %2 === 0) {
        novaArray.push(array[i])
    }
        
} console.log(novaArray) 

*/

// D- Crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero, Imprima este novo array. 

/*

let frase = ("O elemento do índex i é: ")

for(let i = 0; i < array.length; i++){
    console.log(`O elemento do índex ${i} é $array[i]}`)
    }
    
*/

// E- Escreva um programa que imprima no console o maior e o menor números contidos no array original

let maiorNumero = 0
let menorNumero = array[0]

for(let i = 0; i < array.length; i++) {
    if(array[i] > maiorNumero) {
        maiorNumero = array[i]
    }

        if(array[i] < menorNumero) {
            menorNumero = array[i]
        }
       
} console.log("O maior numero é: ", maiorNumero, "e o menor numero é: ", menorNumero)






  