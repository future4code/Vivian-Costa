//EXERCÍCIO 4 - Escreva as funções explicadas abaixo:

//a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

// const apresentacaoFrase = () => {
//        console.log("Eu sou ")
// }
// const apresentacaoNome = () => {
//     console.log("Vivian")
// }

// const apresentacaoIdade = () => {
//     console.log("tenho 30 anos")
// }
// const apresentacaoCidade = () => {
//     console.log("Moro em Lisboa")
// }
// const apresentacaoEstudante = () => {
//     console.log("e sou estudante")
// }


//  apresentacaoFrase() 
//  apresentacaoNome() 
//  apresentacaoIdade()
//  apresentacaoCidade()
//  apresentacaoEstudante()

// b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e um boolean que representa se é estudante ou não. 
// Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.

const apresentacaoFrase = () => {
    console.log("Eu sou ")
}
const apresentacaoNome = () => {
 const nome = "Vivian"
 console.log(nome)
}

const apresentacaoIdade = () => {
 const idade = 30
 console.log("tenho", idade, "anos")
}
const apresentacaoCidade = () => {
 const cidade = "Lisboa"
 console.log("Moro em ", cidade)
}
const apresentacaoEstudante = () => {
 const estudante = true
 console.log("e sou estudante", estudante)
}


apresentacaoFrase() 
apresentacaoNome() 
apresentacaoIdade()
apresentacaoCidade()
apresentacaoEstudante()