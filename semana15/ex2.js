/* 
Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.
*/

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);
const add = num1 + num2;
const div = num1 / num2;
const mult = num1 * num2;
const sub = num1 - num2;

console.log(`Resultado soma: ${add}`);
console.log(`Resultado divisão: ${div}`);
console.log(`Resultado multiplicação: ${mult}`);
console.log(`Resultado subtração: ${sub}`);
