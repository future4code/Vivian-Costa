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
font-size: 2em;
background: -webkit-linear-gradient(left, RGB(108, 66, 245) 50%, RGB(185, 66, 245) 50%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
display: inline;
`
const IconButton = styled.img`
border-radius: 50%;
background-color: white;
right: 60px;
height: 60px;
cursor: pointer;
:hover {
    top:-2px;border-bottom:2px solid #999;padding-bottom:2px;
}
`
const IconMatchButton = styled.button `
border-radius: 50%;
border: 0px solid white;
whidth: 100%;
margin-right: 5%;
background-color: white;

`

export default function Header (props) {

    return (
        <HeaderContainer>
            <IconMatchButton onClick={props.goToChooseProfilePage}><IconButton src='https://png.pngtree.com/png-vector/20190810/ourlarge/pngtree-hand-love-heart-wedding-flat-color-icon-vector-icon-png-image_1653917.jpg'></IconButton></IconMatchButton>
            <TitleContainer>Astromatch</TitleContainer>
            <IconMatchButton onClick={props.goToMatchListPage}><IconButton src='https://png.pngtree.com/png-vector/20190806/ourlarge/pngtree-couple-love-marriage-heart-flat-color-icon-vector-icon-png-image_1651345.jpg'></IconButton></IconMatchButton>
        </HeaderContainer>
    )
}