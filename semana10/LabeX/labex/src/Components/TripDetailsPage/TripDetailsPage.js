import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useProtectedRoute} from '../../Hooks/useProtectedRoute'
import { goToCreateTripPage, goToTripsPage } from "../../Router/Coordinator";
import { useHistory } from "react-router-dom";
import { Body, ButtonDetails, Title, Main, MainParagraph } from "./StyledTripDetailsPage";


export function TripDetailsPage (ids){

    const [candidatos, setCandidatos] = useState([])
    const [trip, setTrip] = useState()
    const history = useHistory();
    useProtectedRoute();


    useEffect(() => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/viviancosta-epps/trip/${ids.ids}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((res) => {
            setTrip(res.data.trip);
            setCandidatos(res.data.trip.candidates)
        })

    }, [])

    return (
        <Body>
            <  ButtonDetails onClick={() => goToCreateTripPage(history)}>Criar Viagem </ ButtonDetails>
            <  ButtonDetails onClick={() =>  goToTripsPage(history)}>Lista de Destinos </ ButtonDetails>
            <Title>Detalhes da viagem</Title>
            {candidatos.map ((e) => {
                return(
                    <Main>
                    <MainParagraph>Candidato: {e.name}</MainParagraph>
                    <MainParagraph>Idade: {e.age}</MainParagraph>
                    <MainParagraph>País: {e.country}</MainParagraph>
                    <MainParagraph>Se inscreveu porque: {e.applicationText}</MainParagraph>
                    <MainParagraph>Profissão: {e.profession}</MainParagraph>
                    <MainParagraph>Id: {e.id}</MainParagraph>
                </Main>
                )
           })}
       
       
        </Body>
    )
}