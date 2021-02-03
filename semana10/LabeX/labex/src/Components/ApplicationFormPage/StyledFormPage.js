import styled from "styled-components";

export const FormContainer = styled.div `
display: flex;
`
export const TitleForm = styled.h1 `
text-align: center;
padding-botton: 5%;
`
export const ImageForm = styled.img `
position: relative;
right: 0px;
width: 300px;
height: 300px;
padding: 15%;
display: flex;
`
export const MainForm = styled.div `
border-radius: 5px;
background-color: #f2f2f2;
box-sizing: border-box;
text-align:center;
width: 600px;
height: 90vh;
padding: 20px;
margin-left: 2%;
margin-right: 17%;
`
export const InputTextForm = styled.input `
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