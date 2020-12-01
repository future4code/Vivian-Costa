let comidasPreferidas = ["pizza", "lasanha", "costela", "pao de deus", "banana"];

console.log(comidasPreferidas) //imprime todos os valores

console.log("Essas sao minhas comidas preferidas: ", comidasPreferidas); 

let comidasUsuario = prompt ("Qual e sua comida preferida ?");

comidasPreferidas[1] = comidasUsuario; //aqui esta dizendo que a posicao 2 da minha array ira receber o novo valor 

console.log("Essas sao minhas comidas preferidas: ", comidasPreferidas);