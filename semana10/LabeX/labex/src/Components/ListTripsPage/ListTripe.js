import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { goToFormPage } from "../../Router/Coordinator";
import { useGetTrip } from "../../Hooks/useProtectedRoute";
export  function ListTripe (){
    const [allTrip, setAlltrip] = useState([])
    const history = useHistory()
    
    
        useGetTrip()
    

    useEffect(() => {
   useGetTrip()

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