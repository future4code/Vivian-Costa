import React from 'react';
import { LoginContainer, MainLogin, InputTextLogin, ButtonLogin, TitleLogin } from "./StyledLoginPage";

export function LoginPage (){
    return (
        <LoginContainer>
        <MainLogin>
        <TitleLogin>Login</TitleLogin> 
        <h4>E-mail <InputTextLogin type='text'></InputTextLogin>  </h4>
        <h4>Senha  <InputTextLogin type='text'></InputTextLogin> </h4>
        <ButtonLogin>Enviar</ButtonLogin>
        </MainLogin>
    </LoginContainer>
    )
}