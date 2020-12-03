let array
console.log('a. ', array)
//Ira mostrar uma variavel underfined, pois nao tem nada na variavel

array = null
console.log('b. ', array)
//Ira mostrar uma variavel null, pois nao tem nada na variavel


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//Ira mostrar o tamanho a array

let i = 0
console.log('d. ', array[i])
//Ira mostrar a primeira posicao da array

array[i+1] = 19
console.log('e. ', array)
//Ira mostrar o numero 19 na segunda posicao da array

const valor = array[i+6]
console.log('f. ', valor)
//Ira mostrar o numero 9 pois e a sexta posicao da array.