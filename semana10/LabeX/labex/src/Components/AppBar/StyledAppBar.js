import styled from 'styled-components'

export const AppBarContainer = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Cardo&family=Changa:wght@300&family=Francois+One&display=swap');
font-family: 'Francois One', sans-serif;
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