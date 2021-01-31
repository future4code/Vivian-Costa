import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header'
import ChooseProfilePage from './ChooseProfilePage'
import MatchListPage from "./MatchListPage"

const MainContainer = styled.div `
border: 1px solid black;
border-radius: 10px;
background: white;
width: 400px;
height: 80vh;
margin: 0 auto%;
margin-left: 37%;
margin-right: 37%;
`


export default function Main () {
    const [selectedPage, setSelectedPage] = useState('choose-profile')

    const renderSelectedPage = () => {
        switch(selectedPage){
            case 'choose-profile':
                return <ChooseProfilePage />
            case 'match-list':
                return <MatchListPage />
                default:
                    return <ChooseProfilePage />    
        }
    }

    const goToChooseProfilePage = () => {
        setSelectedPage ('choose-profile')
    }
    const goToMatchListPage = () => {
        setSelectedPage ('match-list')
    }
    return (
      
        <MainContainer>
            <Header goToChooseProfilePage={goToChooseProfilePage} goToMatchListPage={goToMatchListPage }   />
            {renderSelectedPage()}
        </MainContainer>
    )
}