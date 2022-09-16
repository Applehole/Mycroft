import React from 'react'
import { NavigationComponent } from '../styles/componentsStyles/Navigation/NavigationStyle'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navigation() {
  const Token = useSelector((state) => state)
  return (
    <>
      <NavigationComponent>
        <div className="logoDiv">
          <Link to="/">
            <img className="logoPic" src="logo.png" alt="my croft logo" />
          </Link>
        </div>
        <div className="linkDiv">
          <Link className="LoginLink" to="/">
            홈페이지
          </Link>
          {Token.length ? (
            <>
              <Link className="LoginLink" to="/mypage">
                마이페이지
              </Link>
              <Link className="LoginLink" to="/logout">
                로그아웃
              </Link>
            </>
          ) : (
            <>
              <Link className="LoginLink" to="/login">
                로그인
              </Link>
              <Link className="LoginLink" to="/sign-up">
                회원가입
              </Link>
            </>
          )}
        </div>
      </NavigationComponent>
    </>
  )
}

export default Navigation
