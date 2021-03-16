//a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

type amostraDeIdades = {

    numeros: number [] = [21, 18, 65, 44, 15, 18],
    a: number,
    b: number,
    

    obterEstatisticas: (numeros:number) => [...]
}


function obterEstatisticas(numeros:any) {

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}



