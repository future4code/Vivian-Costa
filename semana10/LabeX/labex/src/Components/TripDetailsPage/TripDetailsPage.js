import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useProtectedRoute} from '../../Hooks/useProtectedRoute'
import { goToCreateTripPage } from "../../Router/Coordinator";
import { useHistory } from "react-router-dom";

export function TripDetailsPage (ids){

    const [candidatos, setCandidatos] = useState([])
   // const [aprovados, setAprovados] = useState()
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
           // setAprovados(res.data.trip.approved)
            console.log(res.data.trip)
        })
        .catch((err) => {
            console.log(err)
        }); 

    }, [])

    
    console.log(ids.ids)

    return (
        <div>
            <h1>Detalhes da viagem</h1>
            {candidatos.map ((e) => {
                return(
                <div>
                    <h2>Candidatos</h2>
                {/* <h4>{e.id}</h4> */}
                <h4>{e.planet}</h4>
                <h4>{e.durationInDays}</h4>
                <h4>{e.date}</h4>
                <h4>{e.name}</h4>
                <h4>{e.description}</h4>
                </div>
                )
           })}
        < button onClick={() => goToCreateTripPage(history)}>Criar Viagem </button>
       
        </div>
    )
}