import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { goToFormPage } from "../../Router/Coordinator";

export  function ListTripe (){
    const [allTrip, setAlltrip] = useState([])
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
       

    return (
        <div>
            {allTrip.map((trip) => {
                return(
                    <div>
                    <h1>Pagina de listar viagem</h1>
                    <p>{trip.name}</p>
                    <p>Planeta: {trip.planet}</p>
                    <p>Por {trip.durationInDays} dias</p>
                    <p>Partida: {trip.date}</p>
                    <button onClick={() => goToFormPage(history)}>Cadastre-se</button>
                    </div>
                )
               
            }) }
            
            
        </div>
    )
}