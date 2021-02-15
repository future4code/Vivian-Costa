import React from 'react';
import { HomeContainer, TitleContainer, ParagraphContainer, MainContainer } from "./StyledHome";

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