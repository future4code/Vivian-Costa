import React from 'react'
import styled from "styled-components";

export const CreateTripContainer = styled.div `
background-image: url('https://i.pinimg.com/474x/0c/66/2c/0c662c3afd52637d33991d361b2c6f28.jpg');
@import url('https://fonts.googleapis.com/css2?family=Cardo&family=Changa:wght@300&family=Francois+One&display=swap');
font-family: 'Francois One', sans-serif;

`
export const TitleCriateTrip = styled.h1 `
text-align: center;
padding-botton: 5%;
`

export const MainCriateTrip = styled.form `
border-radius: 10px;
text-align:center;
background-color: rgb(242, 243, 247);
border: solid 1px black;
box-sizing: border-box;
margin-top: 3%;
margin: auto;
width: 50%;
float: center;
padding: 10px;
`

export const InputTextCriateTrip = styled.input `
width: 50%;
padding: 12px;
border: 1px solid #ccc;
border-radius: 4px;
resize: vertical;
`
export const Planets = styled.select `
width: 50%;
padding: 12px;
border: 1px solid #ccc;
border-radius: 4px;
resize: vertical;
`
export const InputTextAreaCriateTrip = styled.textarea `
width: 90%;
height: 100px;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
resize: none;
`
export const ButtonCriateTrip = styled.button `
background-color: #4CAF50;
display: flex;
color: white;
padding: 12px;
margin: 10px;
margin-left: 44%;
border: none;
border-radius: 4px;
cursor: pointer;
float: center;
:hover {
    background-color: #45a049;
}
`
export const GoToDetailsTrip = styled.button `
whidth: 10%;
text-align: center;
background-color:#f2f2f8;
transition-duration: 0.4s;
margin: auto;
width: 100%;
padding: 10px;
border: none;
border-radius: 6px;
cursor: pointer;
float: center;
:hover {
background-color:  #1a237e;
color:#FFFFFF;
}
`