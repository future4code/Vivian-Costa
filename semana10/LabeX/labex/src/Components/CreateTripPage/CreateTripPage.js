import React from 'react';
import {CreateTripContainer, MainCriateTrip, TitleCriateTrip, InputTextCriateTrip, InputTextAreaCriateTrip, ButtonCriateTrip} from './StyledCreateTripPage'



export function CreateTripPage (){
    return (
        <CreateTripContainer>
            <MainCriateTrip>
            <TitleCriateTrip>Criar Viagem</TitleCriateTrip> 
            <h4>Nome </h4>
                <InputTextCriateTrip type='text'></InputTextCriateTrip>
            <h4>Planeta </h4>
                <InputTextCriateTrip type='text'></InputTextCriateTrip>
            <h4>Data </h4>
                <InputTextCriateTrip type='text'></InputTextCriateTrip>
            <h4>Duracao de dias </h4>
                <InputTextCriateTrip type='number'></InputTextCriateTrip>
            <h4>Descricao da Viagem</h4>
            <InputTextAreaCriateTrip></InputTextAreaCriateTrip>
            <ButtonCriateTrip>Enviar</ButtonCriateTrip>
            </MainCriateTrip>
        </ CreateTripContainer >
    )
}