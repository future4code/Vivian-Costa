//1- interpretacao

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) 
//Resultado sera false pois bool1 e bool2 tem resultados diferentes.

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) 
/*Resultado sera false, pois a boll3 eh true, pra ser verdadeiro deveria ser true true e true*/

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
//Resultado sera true, pois o operador ! transforma o resultado em true//

console.log("e. ", typeof resultado)
//Resultado sera boolean