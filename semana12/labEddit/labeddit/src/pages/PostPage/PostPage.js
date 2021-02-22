import React from 'react'

export function PostPage () {

    return(
        <div>
            <h1>Pagina de posts e feeds</h1> 
            <textarea
             name="text"
             placeholder="digite seu texto aqui"
             required
             ></textarea>
             <button>Postar</button>
        </div>
    )
}