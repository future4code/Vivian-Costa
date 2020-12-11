// Exercicio 1

function conversorDeMoeda(valorEmDolar){ // foi criado o nome da funcao e o valor atribuido a ela, sera o 'valor em dolar'
    const cotacao = Number(prompt("Informe o valor da cotacao em dolar: ")) // na variavel cotacao, sera atribuido um valor dado pelo o usuario e convertido de string para number
    return "R$" + (valorEmDolar * cotacao) // nessa etapa, o programa pega o valor que sera armazenado em valorEmDolar e multiplica pela cotacao digitada pelo usuario
}
const meuDinheiro = conversorDeMoeda(100) //aqui, foi criada uma variavel para armazenar a funcao conversorDeMoeda, e foi atribuido um valor de 100 para o valorEmDolar
console.log(meuDinheiro)// nessa etapa, console ira imprimir todo o processo executado dentro da funcao, que esta armazenada na variavel meuDinheiro.