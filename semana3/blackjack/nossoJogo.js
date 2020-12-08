console.log("Bem Vindo ao jogo de BlackJack!")

let jogo = confirm("Quer iniciar uma nova rodada?")

if(jogo) {
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta ()
   let carta1Pc = comprarCarta()
   let carta2Pc = comprarCarta()

   let somaUsuario = carta1Usuario.valor + carta2Usuario.valor
   let somaPc = carta1Pc.valor + carta2Pc.valor

   console.log(`Usuário - cartas:  ${carta1Usuario.texto} ${carta2Usuario.texto} - ${somaUsuario}`)
   console.log(`Computador - cartas: "${carta1Pc.texto} ${carta2Pc.texto} - ${somaPc}`)

   if(somaUsuario > somaPc){
      console.log("O usuario ganhou!")
   } else if(somaPc > somaUsuario){
      console.log("O computador ganhou!")
   } else if(somaUsuario === somaPc) {
      console.log("Empatou!")
   }
   if(confirm("Quer iniciar uma nova rodada?")){
      let carta1Usuario = comprarCarta()
      let carta2Usuario = comprarCarta ()
      let carta1Pc = comprarCarta()
      let carta2Pc = comprarCarta()
   
      let somaUsuario = carta1Usuario.valor + carta2Usuario.valor
      let somaPc = carta1Pc.valor + carta2Pc.valor
   
      console.log(`Usuário - cartas:  ${carta1Usuario.texto} ${carta2Usuario.texto} - ${somaUsuario}`)
      console.log(`Computador - cartas: "${carta1Pc.texto} ${carta2Pc.texto} - ${somaPc}`)
   
      if(somaUsuario > somaPc){
         console.log("O usuario ganhou!")
      } else if(somaPc > somaUsuario){
         console.log("O computador ganhou!")
      } else if(somaUsuario === somaPc) {
         console.log("Empatou!")
      }
       else {
          console.log("Fim de Jogo")
       }
} else {
   console.log("Fim de jogo!")
}
}