// EXERCÍCIO 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

/* a. O que vai ser impresso no console?
Resposta: Ira listar os itens apos o numero 18 e depois vai parar.

b. Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
Resposta: Sim, para acessar todos os itens dessa lista, basta alterar o if, ficaria assim: if(numero > lista). 

*/