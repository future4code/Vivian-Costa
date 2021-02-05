import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { goToDetailsTripPage, goToFormPage } from "../../Router/Coordinator";
import { FormPage } from '../ApplicationFormPage/FormPage';
import { TripDetailsPage } from '../TripDetailsPage/TripDetailsPage';
import styled from "styled-components";

const BodyContainer = styled.div `
margin-right: 10%;
`
const MainContainer = styled.div `
 border: solid 10px black
 margin-right: 100%;

`
const Paragraph = styled.p `
margin-left: 5%;
//border: solid 1px black
`


export  function ListTripe (){
    const [allTrip, setAlltrip] = useState([])
    const [ids, setIds] = useState("")
    const [details, setDetails] = useState(false)
    const history = useHistory();
    

    useEffect(() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/viviancosta-epps/trips")
        .then((res) => {
            setAlltrip(res.data.trips)
        })
        .catch((err) => {
            console.log(err)
        })

    }, []) 

    const getId = (id) => {
        setIds(id)
    }


    const loadList = () => {
        if (details) {
          return (<TripDetailsPage ids={ids} />)
        } 
       
    }
      

    return (
        <BodyContainer>
            {loadList()}
            {allTrip.map((trip) => {
                return(
                    <MainContainer>
                    <Paragraph>{trip.name}</Paragraph>
                    <Paragraph>Planeta: {trip.planet}</Paragraph>
                    <Paragraph>Descricao: {trip.description}</Paragraph>
                    <Paragraph>Por {trip.durationInDays} dias</Paragraph>
                    <Paragraph>Partida: {trip.date}</Paragraph>
                    <button onClick={() => goToFormPage(history) || getId(trip.id)}>Cadastre-se</button>
                    <button onClick={() => getId(trip.id)|| setDetails(!details)}>Detalhes</button>
                    </MainContainer>
                )
               
            }) }
            
            
        </BodyContainer>
    )
}