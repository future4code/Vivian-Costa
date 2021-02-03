import React from 'react';
import styled from 'styled-components'

export const AppBarContainer = styled.div `
display: flex;
justify-content: space-around;
background-color: #000051;
color:#FFFFFF;
`
export const NavBarContainer = styled.nav `
display: flex;
padding: 1.5%;

`
export const ButtonAppBar = styled.button `
display: flex;
whidth: 10%;
text-align: center;
padding: 10px;
background-color: #000051;
color:#FFFFFF;
border: none;
transition-duration: 0.4s;
cursor: pointer;
:hover {
background-color: #4CAF50;
color:#FFFFFF;
}

`