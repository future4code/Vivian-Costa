//exercicio 1:
a = 10
b = 10

console.log(b)

b = 5
console.log(a, b)

/* Resposta: O primeiro console ira imprimir o valor de 10, pois o valor guardado na variável B = 10, além disso, no console, só esta sendo chamado a variável B.
O segundo console, ira imprimir os valores de 10 e 5, pois ouve uma nova atribuição de valores na variável B e o valor dela passou a ser 5. 
*/

//exercicio 2 :

a = 10
b = 20
c = a // c passou a ter o valor de a = 10
b = c // b passou a ter o valor de c = 10
a = b // a passou a ter o valor de b = 20

console.log(a, b, c)

// Resposta: os valores impressos serao 10 10 e 20 