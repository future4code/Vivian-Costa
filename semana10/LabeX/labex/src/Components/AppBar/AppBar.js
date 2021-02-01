import React from 'react';
import styled from 'styled-components'

const AppBarContainer = styled.div `
display: flex;
justify-content: space-around;
background-color: #000051;
color:#FFFFFF;
`
const NavBarContainer = styled.nav `
display: flex;
padding: 1.5%;

`


export function AppBar (){
    return (
        <AppBarContainer>
            <h1>LabeX</h1>
            <NavBarContainer>
                <ul><a>Destinos</a></ul>
                <ul>Cadastre-se</ul>
                <ul>Login</ul>
            </NavBarContainer>
        </AppBarContainer>
    )
}