import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const ButtonsContainer = styled.div `
display: flex;
justify-content: space-around;
`

const LikedButton = styled.button `
text-align: center;
border-radius: 50%;
height: 50px;
right: 50px;
margin-right: 5%;
`
const UnlikedButton = styled.button `
text-align: center;
border-radius: 50%;
height: 50px;
right: 50px;
margin-left: 5%;
`

export default function ChooseButtons (props) {
    
    return (
        <ButtonsContainer>
            <LikedButton onClick={props.onClickYes}>✓</LikedButton>
            <UnlikedButton onClick={props.onClickNo}>X</UnlikedButton>
        </ButtonsContainer>
    )
} 