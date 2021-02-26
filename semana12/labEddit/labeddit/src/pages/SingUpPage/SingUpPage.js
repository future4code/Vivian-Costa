import React from 'react'
import { LogoImage, ScreenContainer, SignUpFormContainer } from './styled'
import { SingUpForm } from './SingUpForm'
import  rt   from '../../assets/rt.png'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'


export function SingUpPage  ({setRightButtonText}) {
  useUnprotectedPage()

    return(
        <ScreenContainer>
             <LogoImage src={rt} />
            <SignUpFormContainer />
            <SingUpForm setRightButtonText={setRightButtonText} />
        </ScreenContainer>
    )
}