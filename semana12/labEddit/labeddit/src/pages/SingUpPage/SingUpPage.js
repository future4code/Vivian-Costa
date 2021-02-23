import React from 'react'
//import useUnprotectedPage from '../../hooks/useUnProtectedPage'
import { ScreenContainer, SignUpFormContainer } from './styled'
import { SingUpForm } from './SingUpForm'

export function SingUpPage  () {
    //useUnprotectedPage()

    return(
        <ScreenContainer>
            <SignUpFormContainer />
            <SingUpForm />
        </ScreenContainer>
    )
}