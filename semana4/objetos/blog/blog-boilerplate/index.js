const informacoesFormulario = {
    tituloPost: "Blog da Vivis",
    autorPost: "Vivian Oliveira",
    conteudoPost: ""
}
console.log(document.getElementById('container-de-posts').innerHTML)

function adicionaTexto() {
    const containerDePost = document.getElementById("container-de-posts")
    const text = document.getElementById("titulo-post", "autor-post", "conteudo-post")
    containerDePost.innerHTML += `<p>${text.value}</p>`
    text.value = ""
 }
 

 function apertouBotao(evento){
    console.log(evento)
    adicionaTexto()
    informacoesFormulario

 }

function apertouEnter(evento){
    if (evento.key === 'Enter'){
        adicionaTexto()
        }
}
