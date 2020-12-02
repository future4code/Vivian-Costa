/* Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade dele e 
imprima no console se ele/ela pode dirigir (apenas maiores de idade). */

//1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
/*3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, 
imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/


const maiorIdade = Number(prompt("Qual e a sua idade?"))

if(maiorIdade >= 18) {
    console.log("Voce pode dirigir!")
} else {
    console.log("Voce nao pode dirigir!")
}









