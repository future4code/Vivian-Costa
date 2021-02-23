import React from 'react'

export function PostPage () {

    return(
        <div>
            <h1>A página de um post mostrará o mesmo card de post da página de feed, com o usuário, texto, curtidas e número de comentários.</h1> 
            <textarea
             name="text"
             placeholder="digite seu texto aqui"
             required
             ></textarea>
             <button>Postar</button>
        </div>
    )
}