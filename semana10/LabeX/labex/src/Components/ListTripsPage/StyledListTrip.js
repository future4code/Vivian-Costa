import styled from "styled-components";

export const BodyContainer = styled.div `
background-image: url('https://i.pinimg.com/474x/0c/66/2c/0c662c3afd52637d33991d361b2c6f28.jpg');
@import url('https://fonts.googleapis.com/css2?family=Cardo&family=Changa:wght@300&family=Francois+One&display=swap');
font-family: 'Francois One', sans-serif;

`
export const Title = styled.h1 `
text-align: center;
color: #ffff;

`
export const MainContainer = styled.div `
background-color: rgb(242, 243, 247);
border: solid 1px black;
border-radius: 4px;
box-sizing: border-box;
margin-top: 3%;
margin: auto;
width: 50%;
float: center;
padding: 10px;

`

export const Paragraph = styled.p `
margin-left: 2%;
margin-top: 3%;
margin-right: 3%;
text-align: center;

`
export const Button = styled.button `
whidth: 10%;
text-align: center;
background-color:rgb(162, 178, 242);
transition-duration: 0.5s;
margin: auto;
width: 50%;
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