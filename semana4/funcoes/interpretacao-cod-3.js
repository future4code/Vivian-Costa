// EXERCÍCIO 3
// O código abaixo mostra uma função que recebe um array e devolve outro array. 
// Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!

const metodo = (array) => {
    let arrayFinal = [];
  
    for (let x of array) {
          if (x % 2 === 0) {
          arrayFinal.push(x * x)
          }
    }
  
    return arrayFinal;
  }

//Acredito que o objetivo do codigo seja incluir numeros pares em uma lista.
//Nomes: NumerosPares e listaNumerosPares    
