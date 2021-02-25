import React from 'react'
import { LogoImage, ScreenContainer, SignUpFormContainer } from './styled'
import { SingUpForm } from './SingUpForm'
import  rdt   from '../../assets/rdt.png'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'


export function SingUpPage  ({setRightButtonText}) {
  useUnprotectedPage()

    return(
        <ScreenContainer>
             <LogoImage src={rdt} />
            <SignUpFormContainer />
            <SingUpForm setRightButtonText={setRightButtonText} />
        </ScreenContainer>
    )
}