import React from 'react'
import { PageDefaultComponent } from '../styles/PageStyles/DefaultStyle'
import { SignupComponent } from '../styles/PageStyles/Signup'
import UserSignUpComponent from '../components/UserSignUpComponent'

function SignUp() {
  return (
    <PageDefaultComponent>
      <SignupComponent>
        <UserSignUpComponent />
      </SignupComponent>
    </PageDefaultComponent>
  )
}

export default SignUp
