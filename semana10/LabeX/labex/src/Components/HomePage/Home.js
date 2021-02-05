import React from 'react';
import styled from 'styled-components'

const HomeContainer = styled.div `
background-color: #F5F5F5;
color:#000;
`
const TitleContainer = styled.h1 `
display: flex;
justify-content: center;
`
const MainContainer = styled.div `
display: flex;
align-itens: center;
padding: 5em 8em 8em 10em;
`
const ParagraphContainer = styled.p `
display: flex;
align-itens: right;
border-right: 3px dashed black;
margin-right: 5em;
padding-right: 2em;
`


export function Home (){
    
    return (
        <HomeContainer>
            <TitleContainer>Já pensou em ir para o espaço?</TitleContainer>
            <MainContainer>
                <ParagraphContainer> 
                A LabeX pode fazer seu sonho se tornar realidade!
                Somos especialistas em viagens espaciais, temos viagens para todos os planetas da galáxia.Caso queira se aventurar com a gente, cadastre-se e vamos nessa!
                </ParagraphContainer>
                <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/594059-foguete-ou-nave-espacial-estao-explorando-as-estrelas-no-vasto-universoprint-gr%C3%A1tis-vetor.jpg" />
            </MainContainer>
        </HomeContainer>
    )
}