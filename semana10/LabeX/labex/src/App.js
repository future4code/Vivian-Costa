import React from 'react';
import styled from 'styled-components'
import { Home  } from "./Components/HomePage/Home";
import { FooterPage } from "./Components/FooterPage/FooterPage";
import {AppBar} from './Components/AppBar/AppBar'

const AppContainer = styled.div `
background: #F5F5F5;
margin: 0;
padding: 0;
// height: 100%;
// min-height: 100%;
// position: relative;
`

export function App() {
  return (
    <AppContainer>
      <AppBar />
      <Home />
      <FooterPage />
     
    </AppContainer>
  );
}

export default App;
