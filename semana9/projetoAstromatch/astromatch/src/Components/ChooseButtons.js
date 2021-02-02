import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const ButtonsContainer = styled.div `
display: flex;
justify-content: space-around;
`

const LikedButton = styled.button `
border-radius: 50%;
border: 0px solid white;
margin-right: 5%;
background-color: white;

`
const PicButton = styled.img`
border-radius: 50%;
background-color: white;
right: 50px;
height: 50px;
cursor: pointer;
:hover {
    top:-2px;border-bottom:2px solid #999;padding-bottom:2px;
}
`
const UnlikedButton = styled.button `
border-radius: 50%;
border: 0px solid white;
whidth: 100%;
margin-right: 5%;
background-color: white;

`

export default function ChooseButtons (props) {
    
    return (
        <ButtonsContainer>
            <UnlikedButton onClick={props.onClickNo}><PicButton src='https://fiqueisemcracha.com.br/wp-content/uploads/2017/11/7-erros-sucesso-como-afiliado.png'></PicButton></UnlikedButton>
            <LikedButton onClick={props.onClickYes}><PicButton src='https://i.fbcd.co/products/original/4cb3dfa788bdb2c97db08616a58304e4b6dd72d374e551cc419a77c4af6ec16e.jpg' /></LikedButton> 
        </ButtonsContainer>
    )
} 