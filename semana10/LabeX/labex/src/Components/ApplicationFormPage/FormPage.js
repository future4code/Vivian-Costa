import React, {useState} from "react";
import { FormContainer, MainForm, TitleForm, InputTextForm, InputTextArea, ButtonForm, ImageForm, Countries } from "./StyledFormPage";
import useForm from '../../Hooks/useForm'
import axios from "axios";

export function FormPage () {
    const [form, onChange, clearlFields] = useForm({name: "", age: "", applicationText: "",
    profession: "", country: "", id: ""})
    const [allTrips, setAllTrips] = useState ([])
    const [viagem, setViagem] = useState ([])

    const applyToTrip = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/viviancosta-epps/trips")
        .then((res) => {
            setViagem(res.data.trips)
        })
        .catch((err) => {
            console.log(err)
        })

    }

    const sendForm = (e) => {
        e.preventDefault();
        console.log(form)
        clearlFields(); 
       

        let id = viagem.id

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/viviancosta-epps/trips/${id}/apply`, {
            headers: {
                Authorization: "vivian-costa-epps",
            }
        })
        .then((res) => {
            setAllTrips(res.data.message)
            applyToTrip(setAllTrips())
        })
        .catch(err => {
            console.log
            (err)
        })
    }

    return (
        <FormContainer>
            <MainForm onSubmit={sendForm} >
            <TitleForm>Cadastre-se!</TitleForm> 
            <h4>Nome: </h4>
                <InputTextForm 
                type='text'
                name="name"
                value={form.name}
                onChange={onChange}
                required
                pattern={"^.{3,}"}
                title={"O nome deve ter no mínimo 3 caracteres"}
               
                />
            <h4>Idade: </h4>
                <InputTextForm 
                type='number'
                name="age"
                value={form.age}
                onChange={onChange}
                required
                min={18}
                title={"Idade deve maior ou igual a 18!"}
                />
            <h4>Profissao: </h4>
                <InputTextForm 
                type='text'
                name="profession"
                value={form.profession}
                onChange={onChange}
                required
                pattern={"^.{10,}"}
                title={"O nome deve ter no mínimo 10 caracteres"}
                />
            <h4>Pais: </h4>
                <Countries
                type='text'
                name="country"
                value={form.country}
                onChange={onChange}
                required
                >
                <option></option>   
                <option>Brasil</option>
                <option>Portugal</option>
                <option>Espanha</option>
                <option>Alemanha</option>
                <option>Argentina</option>
                <option>Uruguai</option>
                <option>Cuba</option>
                <option>Venezuela</option>
                </Countries>

                <Countries>
                <h4>Escolha a viagem: </h4>
                {allTrips.map((trip) => {
                    return(
                        <Countries>
                        <option value="trip.id">{trip.name}</option>
                        </Countries>
                    )
                   
                })}
                </Countries>

            <h4>Por que sou um bom candidato?</h4>
                <InputTextArea
                name="applicationText"
                value={form.applicationText}
                onChange={onChange}
                required
                />
            <ButtonForm>Enviar</ButtonForm>
            </MainForm>
            <ImageForm src='https://freesvg.org/img/Cartoon-Astronaut.png' />
        </FormContainer>
       
    )
}