import React, {useState, useEffect} from "react";
import axios from "axios"
import styled from "styled-components"

const ContainerP = styled.div `
display: block;
margin-left: auto;
margin-right: auto
`
const Paragrafo = styled.p `
font-size: 1.5em;
`

export default function PokeCard (props) {
    const [pokemon, setPokemon] = useState({})

    const pegaPokemon = pokeName => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(response => {
                setPokemon(response.data)
            })
            .catch (err => {
                console.log(err)
            })
    }

    useEffect (() => {
        pegaPokemon(props.pokemon)
        
    }, [props.pokemon])

    return (
        <ContainerP>
            <Paragrafo>Nome: {pokemon.name}</Paragrafo>
            <Paragrafo>Kg: {pokemon.weight}</Paragrafo>
            {pokemon.types && <Paragrafo>Tipo: {pokemon.types[0].type.name}</Paragrafo>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}

        </ContainerP>
    )
}