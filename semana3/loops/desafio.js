// Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ? 

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}

//Serao impressos 4 linhas de 0, porem a cada linha sera incrementado um 0. entao a primeira sera 0, a segunda 00, a terceira 000 e a quarta 0000.