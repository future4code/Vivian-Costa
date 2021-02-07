import styled from "styled-components";

export const FormContainer = styled.div `
background-image: url('https://i.pinimg.com/474x/0c/66/2c/0c662c3afd52637d33991d361b2c6f28.jpg');
@import url('https://fonts.googleapis.com/css2?family=Cardo&family=Changa:wght@300&family=Francois+One&display=swap');
font-family: 'Francois One', sans-serif;
`
export const TitleForm = styled.h1 `
text-align: center;
font-family: 'Francois One', sans-serif;
padding-botton: 5%;
`

export const MainForm = styled.form `
border-radius: 10px;
background-color: #f2f2f2;
box-sizing: border-box;
text-align:center;
font-family: 'Francois One', sans-serif;
margin-top: 3%;
margin: auto;
width: 40%;
float: center;
padding: 10px;

`
export const InputTextForm = styled.input `
width: 50%;
padding: 12px;
border: 1px solid #ccc;
border-radius: 4px;
resize: vertical;
`
export const Countries = styled.select `
width: 50%;
padding: 12px;
border: 1px solid #ccc;
border-radius: 4px;
resize: vertical;
`
export const InputTextArea = styled.textarea `
width: 90%;
height: 100px;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
resize: none;
`
export const ButtonForm = styled.button `
background-color: #4CAF50;
color: white;
padding: 12px 20px;
border: none;
border-radius: 4px;
cursor: pointer;
float: center;
:hover {
    background-color: #45a049;
}
`