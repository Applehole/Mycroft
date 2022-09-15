import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faLock,
  faKey,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { SignUpFunction } from '../styles/componentsStyles/SignUp/SignUpStyles'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

function UserSignUpComponent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [CheckPassword, setCheckPassword] = useState('')
  const [phone, setPhone] = useState('')
  const onChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    } else if (e.target.name === 'CheckPassword') {
      setCheckPassword(e.target.value)
    } else if (e.target.name === 'phone') {
      setPhone(e.target.value)
    }
  }

  const Token = useSelector((state) => state)
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    axios
      .post('https://mycroft-test-api.herokuapp.com/sign-up', {
        email: `${email}`,
        password: `${password}`,
        mobile: `${phone}`,
      })
      .then((res) => {
        console.log(res)
        const token = res.data.token
        dispatch({ type: 'Login', token })
      })
  }

  console.log('Token', Token)
  return (
    <SignUpFunction>
      <div className="SignUpFrameBox">
        <div className="SignUpTitle">SignUp</div>
        <div className="SignUpDiv">
          <form className="SignUpForm" onSubmit={(e) => onSubmit(e)}>
            <div className="SignUpFormIdDiv">
              <FontAwesomeIcon
                className="SignUpFormIdIcon"
                icon={faUser}
                size="2x"
              />
              <input
                className="SignUpFormIdInput"
                name="email"
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => onChange(e)}></input>
            </div>

            <div className="SignUpFormPWDiv">
              <FontAwesomeIcon
                className="SignUpFormPWIcon"
                icon={faLock}
                size="2x"
              />
              <input
                className="SignUpFormPWInput"
                name="password"
                type="password"
                placeholder="password"
                required
                value={password}
                onChange={(e) => onChange(e)}></input>
            </div>

            <div className="SignUpFormCheckPWDiv">
              <FontAwesomeIcon
                className="SignUpFormCheckPWIcon"
                icon={faKey}
                size="2x"
              />
              <input
                className="SignUpFormCheckPWInput"
                name="CheckPassword"
                type="password"
                placeholder="CheckPassword"
                required
                value={CheckPassword}
                onChange={(e) => onChange(e)}></input>
            </div>

            <div className="SignUpFormPhoneDiv">
              <FontAwesomeIcon
                className="SignUpFormPhoneIcon"
                icon={faPhone}
                size="2x"
              />
              <input
                className="SignUpFormPhoneInput"
                name="phone"
                type="number"
                placeholder="phoneNumber"
                required
                value={phone}
                onChange={(e) => onChange(e)}></input>
            </div>

            <input
              className="SignUpFormButton"
              type="submit"
              value="회원가입"></input>
          </form>
        </div>
      </div>
    </SignUpFunction>
  )
}

export default UserSignUpComponent
