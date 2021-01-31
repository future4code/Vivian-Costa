import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Cardo&family=Changa:wght@300&family=Francois+One&display=swap');
display:flex;
justify-content: space-between;
border-bottom: 1px solid lightgray;
align-items: center;
paddin: 0 8px;

`
const TitleContainer = styled.p `
font-family: 'Francois One', sans-serif;
font-size: 1.5em;
background: -webkit-linear-gradient(left, RGB(108, 66, 245) 50%, RGB(185, 66, 245) 50%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
display: inline;
`

export default function Header (props) {

    return (
        <HeaderContainer>
            <button onClick={props.goToChooseProfilePage}>Escolher</button>
            <TitleContainer>Astromatch</TitleContainer>
            <button onClick={props.goToMatchListPage}>Lista</button>
        </HeaderContainer>
    )
}