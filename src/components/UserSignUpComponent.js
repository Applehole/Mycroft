import React, { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faLock,
  faKey,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { SignUpFunction } from '../styles/componentsStyles/SignUp/SignUpStyles'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { validEmail } from '../modules/validation'
import { useNavigate } from 'react-router-dom'

function UserSignUpComponent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [CheckPassword, setCheckPassword] = useState('')
  const [phone, setPhone] = useState('')
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const checkPasswordRef = useRef(null)
  let navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'COUNT/CHANGE', number: 2 })
  }, []) // 그냥 넣으면 무한 리렌더링

  const onChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
      if (e.target.value.length < 8) {
        passwordRef.current.className = 'SignUpFormPWInput redFrame'
      } else {
        passwordRef.current.className = 'SignUpFormPWInput greenFrame'
      }
    } else if (e.target.name === 'CheckPassword') {
      setCheckPassword(e.target.value)
      if (e.target.value !== password) {
        checkPasswordRef.current.className = 'SignUpFormCheckPWInput redFrame'
      } else {
        checkPasswordRef.current.className = 'SignUpFormCheckPWInput greenFrame'
      }
    } else if (e.target.name === 'phone') {
      setPhone(e.target.value)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (validEmail(email)) {
      if (password.length >= 8) {
        if (password === CheckPassword) {
          try {
            axios
              .post('https://mycroft-test-api.herokuapp.com/sign-up', {
                email: `${email}`,
                password: `${password}`,
                mobile: `${phone}`,
              })
              .then((res) => {
                const token = res.data.token
                dispatch({ type: 'Login', token })
                navigate('/')
              })
          } catch (err) {
            console.log(err)
          }
        } else {
          alert('비밀번호 불일치')
        }
      } else {
        alert('비밀번호 확인')
      }
    } else {
      alert('이메일 확인')
      emailRef.current.focus()
    }
  }

  const onBlur = () => {
    if (!validEmail(email)) {
      emailRef.current.className = 'SignUpFormIdInput redFrame'
    } else {
      emailRef.current.className = 'SignUpFormIdInput greenFrame'
    }
  }

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
                onBlur={onBlur}
                ref={emailRef}
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
                ref={passwordRef}
                className="SignUpFormPWInput"
                name="password"
                type="password"
                placeholder="password"
                required
                maxLength={15}
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
                ref={checkPasswordRef}
                className="SignUpFormCheckPWInput"
                name="CheckPassword"
                type="password"
                placeholder="CheckPassword"
                required
                maxLength={15}
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
