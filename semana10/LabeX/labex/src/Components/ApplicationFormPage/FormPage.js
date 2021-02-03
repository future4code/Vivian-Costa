import React from "react";
import { FormContainer, MainForm, TitleForm, InputTextForm, InputTextArea, ButtonForm, ImageForm } from "./StyledFormPage";

export function FormPage () {
    return (
        <FormContainer>
            <MainForm>
            <TitleForm>Cadastre-se!</TitleForm> 
            <h4>Nome: </h4>
                <InputTextForm type='text'></InputTextForm>
            <h4>Idade: </h4>
                <InputTextForm type='number'></InputTextForm>
            <h4>Profissao: </h4>
                <InputTextForm type='text'></InputTextForm>
            <h4>Pais: </h4>
                <InputTextForm type='text'></InputTextForm>
            <h4>Por que sou um bom candidato?</h4>
            <InputTextArea></InputTextArea>
            <ButtonForm>Enviar</ButtonForm>
            </MainForm>
            <ImageForm src='https://freesvg.org/img/Cartoon-Astronaut.png' />
        </FormContainer>
       
    )
}