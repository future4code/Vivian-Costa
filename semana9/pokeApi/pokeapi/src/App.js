import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./Components/PokeCard/Pokemon";
import styled from "styled-components"

const Container = styled.div `
padding: 2%;
width: 375px;
height: 667px;
margin: 0px 10px;
padding-left:38%;
display: flex;
flex-direction: column;
border: none;
border-radius: 25px;

`
const Titulo = styled.h1 `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export default function App () {
  const [pokeList, setPokelist] = useState([])
  const [pokeName, setPokeName] = useState("")

  const handlePokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {
      console.log(response.data.results)
      setPokelist(response.data.results);
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    handlePokemon()
  }, [])

  const changePokeName = event => {
    setPokeName(event.target.value)
  }


  return (
    <div>
        <Titulo>Escolha seu Pokemon</Titulo>
    <Container>
      <select onChange={changePokeName}>
        <option value ={""}>Nenhum</option>
        {pokeList.map (pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      {setPokeName && <PokeCard pokemon={pokeName}/>}
    </Container>
    </div>
  )
}