import React from 'react';
import {CreateTripContainer, MainCriateTrip, TitleCriateTrip, InputTextCriateTrip, InputTextAreaCriateTrip, ButtonCriateTrip, Planets, GoToDetailsTrip} from './StyledCreateTripPage'
import { useHistory } from "react-router-dom";
import {goToDetailsTripPage} from "../../Router/Coordinator";
import useForm from '../../Hooks/useForm'
import axios from "axios";


export function CreateTripPage (){
    const [form, onChange, clearlFields] = useForm({name: "", planet: "", date: "",
    description: "", durationInDays: ""})
    const history = useHistory();

    const createTrip = (e) => {
        e.preventDefault();
        clearlFields();

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/viviancosta-epps/trips', form, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((res) => {
            console.log(res.data.trip)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <CreateTripContainer>
            < GoToDetailsTrip onClick={() => goToDetailsTripPage(history)}>Detalhes Viagem </  GoToDetailsTrip>
            <MainCriateTrip onSubmit={createTrip}>
            <TitleCriateTrip>Criar Viagem</TitleCriateTrip> 
            <h4>Nome </h4>
                <InputTextCriateTrip 
                type='text'
                name="name"
                value={form.name}
                onChange={onChange}
                required
                pattern={"^.{5,}"}
                title={"O nome deve ter no mínimo 5 caracteres"}
                />
            <h4>Planeta </h4>
                <Planets 
                type='text'
                name="planet"
                value={form.planet}
                onChange={onChange}
                required
                type='select'
                >
                <option></option> 
                <option>Mercúrio</option>
                <option>Vênus</option>
                <option>Terra</option>
                <option>Marte</option>
                <option>Júpiter</option>
                <option>Saturno</option>
                <option>Urano</option>
                <option>Netuno</option>
                </Planets>
            <h4>Data </h4>
                <InputTextCriateTrip 
                type='date'
                name="date"
                value={form.date}
                onChange={onChange}
                required
                />
            <h4>Duracao de dias </h4>
                <InputTextCriateTrip
                type='number'
                name="durationInDays"
                value={form.durationInDays}
                onChange={onChange}
                required
                min={50}
                title={"Duracao no minimo 50 dias!"}
                />
            <h4>Descricao da Viagem</h4>
            <InputTextAreaCriateTrip
                name="description"
                value={form.description}
                onChange={onChange}
                required
                type='text'
                pattern={"^.{30,}"}
                title={"O nome deve ter no mínimo 30 caracteres"}
                />
            <ButtonCriateTrip>Enviar</ButtonCriateTrip>
            </MainCriateTrip>
        </ CreateTripContainer >
    )
}