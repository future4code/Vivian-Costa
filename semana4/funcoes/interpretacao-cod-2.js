//EXERCÍCIO 2

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes)

//a. Explicite quais são as saídas impressas no console
//A saida impressa sera da primeira e segunda posicao, pois e para apresentar o indice menor que 2, sendo assim, sera impresso a posicao 0 e 1.

//b. Se arrayDeNomes mudasse de valor para ["Amanda", "Caio"], o que vai ser impresso no console?
//Vai ser impresso as duas posicoes, pois se encaixa dentro das condicoes que esta dentro do for.