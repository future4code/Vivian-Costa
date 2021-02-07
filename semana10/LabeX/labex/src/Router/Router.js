import React from 'react';
import styled from 'styled-components'
import { Home  } from '../Components/HomePage/Home'
import { FooterPage } from "../Components/FooterPage/FooterPage";
import {AppBar} from '../Components/AppBar/AppBar'
import { FormPage } from "../Components/ApplicationFormPage/FormPage";
import { ListTripe } from '../Components/ListTripsPage/ListTripe'
import { CreateTripPage } from "../Components/CreateTripPage/CreateTripPage";
import { LoginPage } from "../Components/LoginPage/LoginPage";
import { TripDetailsPage } from "../Components/TripDetailsPage/TripDetailsPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const AppContainer = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Cardo&family=Changa:wght@300&family=Francois+One&display=swap');
background: #F5F5F5;
font-family: 'Francois One', sans-serif;
margin: 0;
padding: 0;
overflow: auto;

`

export function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <AppBar />
        <Switch>
          <Route exact path='/'>
          <Home />
          </Route>
          <Route exact path='/application-form'>
             <FormPage /> 
          </Route>
          <Route exact path='/login'>
             <LoginPage /> 
          </Route>
          <Route exact path='/trip/create'>
             <CreateTripPage /> 
          </Route>
          <Route exact path='/trip/details'>
             <TripDetailsPage /> 
          </Route>
          <Route exact path='/trip/list'>
             <ListTripe /> 
          </Route>
         
        </Switch>
        <FooterPage />
      </BrowserRouter>
  
    </AppContainer>
  );
}

export default App;
