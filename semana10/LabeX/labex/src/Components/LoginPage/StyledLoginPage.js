import styled from 'styled-components'

export const LoginContainer = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Cardo&family=Changa:wght@300&family=Francois+One&display=swap');
font-family: 'Francois One', sans-serif;
display: flex;
`
export const TitleLogin = styled.h1 `
text-align: center;
padding-botton: 5%;
`
export const MainLogin = styled.div `
border-radius: 5px;
background-color: #f2f2f2;
box-sizing: border-box;
text-align:center;
width: 50vh;
height: 80vh;
padding: 20px;
margin-left: 37%;
margin-right: 17%;
`
export const InputTextLogin = styled.input `
width: 50%;
padding: 12px;
border: 1px solid #ccc;
border-radius: 4px;
resize: vertical;
`
export const ButtonLogin = styled.button `
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