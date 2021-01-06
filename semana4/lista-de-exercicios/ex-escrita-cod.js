//-----------------------------------------------------------Exercicio 1 -------------------------------------------------------------------------------------------------// 

                                //Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.

// const exemplo1 = ["banana", "pera", "laranja", "mexerica"]

// for(let frutas of exemplo1){
//     console.log(frutas)
//   }

// const exemplo2 = ["guitarra", "baixo", "bateria", "ukulele"]

// for(let i = 0; i < 4; i++){
//     const instrumentos = exemplo2[i]
//     console.log(instrumentos)
// }

// const exemplo3 = ["bola", "batata", "bateria", "ukulele"]

// console.log(exemplo3)
// console.log(exemplo3.length)

//----------------------------------------------------------Exercicio 2----------------------------------------------------------------------------------------------------// 

                                       //Para este exercício considere as seguintes variáveis:

// const booleano1 = true
// const booleano2 = false
// const booleano3 = !booleano2 //true
// const booleano4 = !booleano3 //false

//a) booleano1 && booleano2 && !booleano4
//Resposta: false

//b) (booleano1 && booleano2) || !booleano3
//Resposta: true

//c)  (booleano2 || booleano3) && (booleano4 || booleano1)
//Resposta: true

//d) !(booleano2 && booleano3) || !(booleano1 && booleano3)
//Resposta: true

//e) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
//Resposta: false

//-------------------------------------------------------Exercicio 3-------------------------------------------------------------------------------------------------///////

            /* Você tem que escrever um código que, dado um número N, ele imprima (no console) os N primeiros números pares (por exemplo, se N for 3, 
            você deve imprimir 0, 2 e 4; se N for 5, deve imprimir 0, 2, 4, 6 e 8).  Um colega seu disse que já começou esta tarefa, mas não conseguiu terminar.
            D}ê uma olhada no código dele: */


const quantidadeDeNumerosPares  
let i = 0
while(i <= quantidadeDeNumerosPares) {
    console.log(i * 2)
    i ++
}            
