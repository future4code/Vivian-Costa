// EXERCÍCIO 6 - Repita o exercício anterior, mas utilizando a estrutura de switch case agora. 

 const qualTurno = prompt("Qual turno voce estuda? Digite M para MATUTINO, V para VESPERTINO ou N para NOTURNO: ")

 switch(qualTurno){
    case("M"):
        console.log("Bom dia!")
        break
    case("V"):
        console.log("Boa tarde!")
        break
    case("N"):
        console.log("Boa Noite!")
        break
        default:
            console.log("Opcao invalida! Digite M para MATUTINO, V para VESPERTINO ou N para NOTURNO.")

 }
