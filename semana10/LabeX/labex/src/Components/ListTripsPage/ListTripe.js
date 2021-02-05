import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { goToDetailsTripPage, goToFormPage } from "../../Router/Coordinator";
import { FormPage } from '../ApplicationFormPage/FormPage';
import { TripDetailsPage } from '../TripDetailsPage/TripDetailsPage';

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
        <div>
            {loadList()}
            {allTrip.map((trip) => {
                return(
                    <div>
                    <h2>{trip.name}</h2>
                    <p>Planeta: {trip.planet}</p>
                    <p>Descricao: {trip.description}</p>
                    <p>Por {trip.durationInDays} dias</p>
                    <p>Partida: {trip.date}</p>
                    <button onClick={() => goToFormPage(history) || getId(trip.id)}>Cadastre-se</button>
                    <button onClick={() => getId(trip.id)|| setDetails(!details)}>Detalhes</button>
                    </div>
                )
               
            }) }
            
            
        </div>
    )
}