import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useProtectedRoute} from '../../Hooks/useProtectedRoute'

export function TripDetailsPage (){
    const [trip, setTrip] = useState({})
    useProtectedRoute();

    useEffect(() => {
      getTripDetail()
    }, [])

    const getTripDetail = (id) => {
            // const id ={
            //     trip: choice,
            //     id: trip.id
            // }
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((res) => {
            setTrip(res.data.trip);
        })
        .catch((err) => {
            console.log(err)
        }); 
    }


    return (
        <div>
           <h1>Detalhes da viagem</h1>
           <h2>{trip.name}</h2>
           <p>{trip.description}</p>
        </div>
    )
}