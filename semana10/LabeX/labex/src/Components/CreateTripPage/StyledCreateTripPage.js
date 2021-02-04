import React from 'react'
import styled from "styled-components";

export const CreateTripContainer = styled.div `
display: flex;
background-image: url('https://i.pinimg.com/474x/0c/66/2c/0c662c3afd52637d33991d361b2c6f28.jpg')

`
export const TitleCriateTrip = styled.h1 `
text-align: center;
padding-botton: 5%;
`

export const MainCriateTrip = styled.form `
border-radius: 10px;
background-color: #f2f2f2;
box-sizing: border-box;
text-align:center;
width: 40%;
height: 60%;
padding: 2% 2%;
margin-left: 27%;
margin-right: 27%;
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
background-color: #4CAF50;
display: flex;
color: white;
width: 10%;
height: 100px;
padding: 12px 20px;
border: none;
border-radius: 4px;
cursor: pointer;
float: center;
:hover {
    background-color: #45a049;
}
`