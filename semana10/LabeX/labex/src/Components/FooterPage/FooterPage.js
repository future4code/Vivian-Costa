import React from 'react';
import styled from 'styled-components'


const NavFooterContainer = styled.nav `
bottom: 0;
right: 0;
height: 30px;
position: fixed;
padding: 10px;
`


export function FooterPage (){
    return (
            <NavFooterContainer>
                <h4>Todos os direitos reservados &copy;2021 </h4>
            </NavFooterContainer>
    )
}