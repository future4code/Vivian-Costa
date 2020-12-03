/* EXERCÍCIO 5
Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else */

const qualTurno = prompt("Qual turno voce estuda? Digite M para MATUTINO, V para VESPERTINO ou N para NOTURNO: ")

if(qualTurno === "M"){
    console.log("Bom dia!")
} 
else if(qualTurno === "V") {
    console.log("Boa tarde!")
}  
else {
    console.log("Boa noite!")
}

