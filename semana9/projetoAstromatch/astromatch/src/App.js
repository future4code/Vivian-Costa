import React, {useState} from 'react';
import styled from 'styled-components';
import Main from './Components/Main'
import  ResetButton  from "./Components/ResetButton";



const AppContainer = styled.div `
background: #A9A9A9;
height: 100vh;
padding-top: 10vh;

`



export default function App() {
  return (
    <AppContainer>
          {/* <Header></Header> */}
          <Main></Main>
          <ResetButton />     
    </AppContainer>
  );
}

