import React from 'react';
import styled from 'styled-components'

const FooterContainer = styled.div `
display: flex;
justify-content: space-around;
background-color: #1a237e;
color:#FFFFFF;
bottom: 0;
left: 0;
`
const NavFooterContainer = styled.nav `
display: flex;
padding: 1.5%;

`
const  ButtonFooter = styled.button `
display: flex;
whidth: 10%;
text-align: center;
padding: 10px;
background-color: #1a237e;
color:#FFFFFF;
border: none;
transition-duration: 0.4s;
cursor: pointer;
:hover {
background-color: #4CAF50;
color:#FFFFFF;
}
`


export function FooterPage (){
    return (
        <FooterContainer>
            <NavFooterContainer>
                <  ButtonFooter>Home </  ButtonFooter>
                <  ButtonFooter>Destinos </  ButtonFooter>
                <  ButtonFooter>Cadastre-se </  ButtonFooter>
                <  ButtonFooter>Login </  ButtonFooter>
            </NavFooterContainer>
        </FooterContainer>
    )
}