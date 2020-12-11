// Exercicio 1

// function conversorDeMoeda(valorEmDolar){ // foi criado o nome da funcao e o parametro atribuido a ela, sera o 'valor em dolar'
//     const cotacao = Number(prompt("Informe o valor da cotacao em dolar: ")) // na variavel cotacao, sera atribuido um valor dado pelo o usuario e convertido de string para number
//     return "R$" + (valorEmDolar * cotacao) // nessa etapa, o programa pega o valor que sera armazenado em valorEmDolar e multiplica pela cotacao digitada pelo usuario
// }
// const meuDinheiro = conversorDeMoeda(100) //aqui, foi criada uma variavel para armazenar a funcao conversorDeMoeda, e foi atribuido um valor de 100 para o valorEmDolar
// console.log(meuDinheiro)// nessa etapa, console ira imprimir todo o processo executado dentro da funcao, que esta armazenada na variavel meuDinheiro.

// Exercicio 2

// function investeDinheiro(tipoDeInvestimento, valor){ // foi criada a funcao investeDsinheiro com dois parametros atribuidos que sao o tipoDeInvestimento e valor.
//     let valorAposInvestimento;// variavel para guardar o ValorAposInvestimento

//     switch(tipoDeInvestimento){//aqui teremos algumas possibilidades para o tipoDeInvestimento e quanto sera rentavel apos o investimento
//         case "Poupanca":
//             valorAposInvestimento = valor * 1.03; // a variavel vai guardar o resultado do valor investido multiplicado pelo rendimento, nesse caso, do rendimento da poupanca
//             break; //aqui o programa para, se nao tiver o break, ele ira executar todas as operacoes e nao queremos isso!
//         case "Renda Fixa": 
//             valorAposInvestimento = valor * 1.05;
//             break;  
//         case "CDB":
//             valorAposInvestimento = valor * 1.06;
//             break;      
//         case "Acoes":
//             valorAposInvestimento = valor * 1.01;
//             break; 
//         default:
//             alert('Tipo de investimento incorreto!')// se o usuario nao escolheu nenhuma das opcoes anteriores, o programa ira exibir esse alerta informando que a opcao e incorreta.  
//             break;     
//     }
//     return valorAposInvestimento // o programa ira retornar o resultado da opcao escolhida pelo usuario
// }
// const novoMontante = investeDinheiro("Acoes", 150) //nessa variavel, sera guardada a funcao com os parametros solicitados, que corresponde ao tipo de investimento e o valor do investimento.
// const segundoMontante = investeDinheiro("Tesouro direto", 200) // nesse caso, acredito que nao ira funcionar, pois o programa nao possui o parametro de Tesouro Direto.

// console.log(novoMontante) // ira imprimir os parametros da funcao investeDinheiro
// console.log(segundoMontante)// Ira aparecer um alerta informando que o tipo de investimento e

//Exercicio 3

const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283]; //foi criada uma lista com diversos numeros
const array1 = []; // essa lista esta vazia, ela sera para armazenar os numeros pares da variavel numeros
const array2 = []; // essa lista esta vazia, ela sera para armazenar os numeros impares da variavel numeros

for(let numero of numeros){ //nessa etapa, foi utilizada a sintaxe for of, dentro do for ja foi criada a variavel numero e atribuida a variavel numeros
    if(numero %2 === 0){ //nessa etapa, o programa verifica todos os numeros da lista que possui o resto da divisao igual a zero, ou seja, se sao numeros pares
        array1.push(numero)// aqui sera armazenados todos os numeros pares que a linha acima verificou
    } else { //o programa ira separar tudo que nao esta conforme a condicao passada, nesse caso, ira ler os numero impares
        array2.push(numero)//aqui sera armazenados os numeros impares
    }
}

console.log("A quantidade total de numeros e: ", numeros.length) // o codigo ira imprimir o total de numeros dentro da lista
console.log(array1.length)// o codigo ira imprimir uma nova lista, apenas com os numeros pares
console.log(array2.length)// o codigo ira imprimir uma nova lista, apenas com os numeros impares
