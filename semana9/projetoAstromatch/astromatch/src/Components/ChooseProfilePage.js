import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProfileCard from "./ProfileCard"
import ChooseButtons from "./ChooseButtons";

export default function ChooseProfilePage () {
    const [profileToChoose, setProfileToChoose] = useState(undefined)

    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/viviancosta/person')
        .then(response => {
            setProfileToChoose(response.data.profile)
        })
        .catch(err => {
            console.log
            (err.data)
        })
    }

    const chooseProfile = (choice) => {
        const body= {
            choice: choice,
            id: profileToChoose.id
        }   
        setProfileToChoose(undefined) 
        
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/viviancosta/choose-person', body)
            .then ( response => {
                console.log(response)
                getProfileToChoose()
            })
    }

    useEffect(() => {
       getProfileToChoose()
    }, []);

    const onClickNo = () => {
        chooseProfile(false)
    }

    const onClickYes = () => {
        chooseProfile(true)
    }


    return (
        <div>
            { profileToChoose ?
            (<>
                 < ProfileCard profile={profileToChoose}/>
                 <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes} />
            </> ) : <p>Carregando...</p>   
            }
           
        </div>
    )
} 