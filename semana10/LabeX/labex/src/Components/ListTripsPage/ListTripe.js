import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { goToFormPage } from "../../Router/Coordinator";
import { TripDetailsPage } from '../TripDetailsPage/TripDetailsPage';
import { BodyContainer, Title, MainContainer, Paragraph, Button } from "./StyledListTrip";


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
            <Title>Próximas Viagens</Title>
            {loadList()}
            {allTrip.map((trip) => {
                return(
                    <MainContainer>
                   <strong><Paragraph><h2>{trip.name}</h2></Paragraph></strong> 
                    <Paragraph>Planeta: {trip.planet}</Paragraph>                   
                    <Paragraph>Por {trip.durationInDays} dias</Paragraph>
                    <Paragraph>Partida: {trip.date}</Paragraph>
                    <Paragraph>Descricao: <br/>{trip.description}</Paragraph>
                    <Button onClick={() => goToFormPage(history) || getId(trip.id)}>Cadastre-se</Button>
                    <Button onClick={() => getId(trip.id)|| setDetails(!details)}>Detalhes</Button>
                    </MainContainer>
                   
                )
               
            }) }
            
        </BodyContainer>
    )
}