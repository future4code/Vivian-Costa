import React from 'react';
import styled from 'styled-components'

const FooterContainer = styled.div `
display: flex;
justify-content: space-around;
background-color: #1a237e;
color:#FFFFFF;
// width: 50%;
// height: 50px;
//position: absolute;
bottom: 0;
left: 0;
`
const NavFooterContainer = styled.nav `
display: flex;
padding: 1.5%;

`


export function FooterPage (){
    return (
        <FooterContainer>
            <NavFooterContainer>
                <ul>Destinos</ul>
                <ul>Cadastre-se</ul>
                <ul>Login</ul>
            </NavFooterContainer>
        </FooterContainer>
    )
}