/* Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero fantasia ****
e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e
 outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
 Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :(" */

 const filme = prompt("Qual genero do filme?")
 const valorIngresso = Number(prompt("Qual e o valor do ingresso?"))
 

 if(filme === "fantasia" && valorIngresso <= 15 ) {
     console.log("Bom filme!")
 } 
 else {
     console.log("Escolha outro filme!")
 }