import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { SignUpFunction } from '../styles/componentsStyles/SignUp/SignUpStyles'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { validEmail } from '../modules/validation'
import { useNavigate } from 'react-router-dom'

function UserLoginComponent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  let navigate = useNavigate()

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
    }
  }
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'COUNT/CHANGE', number: 2 })
  }) // 그냥 넣으면 무한 리렌더링

  const onSubmit = (e) => {
    e.preventDefault()
    if (validEmail(email)) {
      try {
        axios
          .post('https://mycroft-test-api.herokuapp.com/login', {
            email: `${email}`,
            password: `${password}`,
          })
          .then((res) => {
            const token = res.data.token
            dispatch({ type: 'TOKEN/LOGIN', token })
            navigate('/')
          })
      } catch (err) {
        console.log(err)
        alert('비밀번호 확인')
      }
    } else {
      alert('이메일 확인')
      emailRef.current.focus()
    }
  }

  const onClick = () => {
    if (!validEmail(email)) {
      emailRef.current.className = 'SignUpFormIdInput redFrame'
    } else {
      emailRef.current.className = 'SignUpFormIdInput greenFrame'
    }
  }

  return (
    <SignUpFunction>
      <div className="SignUpFrameBox">
        <div className="SignUpTitle">Login</div>
        <div className="SignUpDiv">
          <form className="SignUpForm" onSubmit={(e) => onSubmit(e)}>
            <div className="SignUpFormIdDiv">
              <FontAwesomeIcon
                className="SignUpFormIdIcon"
                icon={faUser}
                size="2x"
              />
              <input
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
                onClick={onClick}
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

            <input
              className="SignUpFormButton"
              type="submit"
              value="로그인"></input>
          </form>
        </div>
      </div>
    </SignUpFunction>
  )
}

export default UserLoginComponent
