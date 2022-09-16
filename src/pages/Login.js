import React from 'react'
import { PageDefaultComponent } from '../styles/PageStyles/DefaultStyle'
import { LoginComponent } from '../styles/PageStyles/Loginpage'
import UserLoginComponent from '../components/UserLoginComponent'

function Login() {
  return (
    <PageDefaultComponent>
      <LoginComponent>
        <UserLoginComponent />
      </LoginComponent>
    </PageDefaultComponent>
  )
}

export default Login
