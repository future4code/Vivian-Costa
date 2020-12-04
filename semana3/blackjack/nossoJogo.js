/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 */
 
const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
const usuario1 = comprarCarta()
const usuario2 = comprarCarta()

// console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
// console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)



const somaUsuario1 = carta.valor + carta.texto
const somaPc = carta.valor + carta.valor

if(confirm("Bem Vindo ao jogo de BlackJack!")){
   //if(usuario1 === "ok")
      console.log("Usuário - cartas: ", usuario1.texto , "- pontuação: ", somaUsuario1 + " ")
      console.log("Computador - cartas: ",  usuario2.texto,  "- pontuação: ", somaPc) 
   if(confirm("Quer iniciar uma nova rodada?")){
      console.log("Usuário - cartas:", usuario1.texto,  "- pontuação: ", somaUsuario1 + " ")
      console.log("Computador - cartas:", usuario2.texto,  "- pontuação: ", somaPc + " ")
   } 
   if(somaUsuario1 > somaPc){
      console.log("Pc ganhou")
   }
   else {
      console.log ("Usuario ganhou!")
   } 
} 

else {
   console.log("Fim de jogo!")
}






// { "e o segundo é " + usuario2.valor + carta.texto
//    while(confirm){
//          console.log("Nova Rodada", carta.carta )
//          if(confirm("Quer iniciar uma nova rodada? ")){
//            // console.log("Nova Rodada", carta.carta )
//          }else {
//             console.log("O jogo acabou!")
//          }}
//       //console.log(confirm)
//    } else {
//          console.log("O jogo acabou!")
//       }


// while(quantidadeAtual < quantidadeTotal){
//    let linha = ""
//    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//      linha += "0"
//    }
//    console.log(linha)
//    quantidadeAtual++ //
