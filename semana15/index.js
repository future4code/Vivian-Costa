//a. Como fazemos para acessar os parâmetros passados na linha de comando para o Node?

//primeiro utilizamos npm install para instalar o node_modules e apos npm + o nome do script, nesse caso seria o start. 

//b. Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

const nameUser = (process.argv[2])
const age = Number(process.argv[3])

//c. Altere o programa acima para que mostre também a sua idade daqui a sete anos.
const somaAge = (age + 7)

console.log(`Olá, ${nameUser}! Você tem ${age} anos. Em sete anos você terá ${somaAge} anos.`)