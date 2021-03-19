//a. Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

const minhaString: string | number =  1

// R: aparece um erro informando que o tipo da variavel e uma string e nao aceita numeros, eu posso atribuir um numero em forma de string, ou posso usar o operador | para o tio ser string ou number.

//b. Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?

const meuNumero: number | string = 1 

//R: utilizando o operador |

/*c Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
nome, que é uma string;
idade, que é um número;
corFavorita, que é uma string.
*/
enum CORES_ARCO_IRIS {
    VERDE = "VERDE", 
    ROXO = "ROXO", 
    AMARELO = "AMARELO" 
    
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES_ARCO_IRIS,
   
}

//Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

const pessoa1: pessoa = {
    nome: "Vivian",
    idade: 31,
    corFavorita: CORES_ARCO_IRIS.AMARELO
}

const pessoa2: pessoa = {
    nome: "Thiago",
    idade: 30,
    corFavorita: CORES_ARCO_IRIS.ROXO
}

const pessoa3: pessoa = {
    nome: "Valdilene",
    idade: 38,
    corFavorita: CORES_ARCO_IRIS.VERDE
}