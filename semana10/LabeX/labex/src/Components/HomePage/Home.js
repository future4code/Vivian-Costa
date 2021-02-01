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
            <TitleContainer>Ja pensou em ir para o espaco?</TitleContainer>
            <MainContainer>
                <ParagraphContainer>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </ParagraphContainer>
                <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/594059-foguete-ou-nave-espacial-estao-explorando-as-estrelas-no-vasto-universoprint-gr%C3%A1tis-vetor.jpg" />
            </MainContainer>
        </HomeContainer>
    )
}