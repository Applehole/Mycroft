import React from 'react'
import { NavigationComponent } from '../styles/componentsStyles/Navigation/NavigationStyle'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid' // 유니크한 값이 없어서 넣어줬다.

function Navigation() {
  const Token = useSelector((state) => state.token)
  const { count } = useSelector((state) => state.counter)

  const loginState = [
    { name: '홈페이지', link: '/' },
    { name: '마이페이지', link: '/mypage/order' },
    { name: '로그아웃', link: '/logout' },
  ]
  const logoutState = [
    { name: '홈페이지', link: '/' },
    { name: '회원가입', link: '/sign-up' },
    { name: '로그인', link: '/login' },
  ]
  return (
    <>
      <NavigationComponent>
        <div className="logoDiv">
          <Link to="/">
            <img className="logoPic" src="logo.png" alt="my croft logo" />
          </Link>
        </div>
        <div className="linkDiv">
          {Token.length ? (
            <>
              {loginState.map((el, idx) => {
                if (idx === count) {
                  return (
                    <Link
                      key={uuidv4()}
                      className="LightLink"
                      to={`${el.link}`}>
                      {`${el.name}`}
                    </Link>
                  )
                } else {
                  return (
                    <Link
                      key={uuidv4()}
                      className="LoginLink"
                      to={`${el.link}`}>
                      {`${el.name}`}
                    </Link>
                  )
                }
              })}
            </>
          ) : (
            <>
              {logoutState.map((el, idx) => {
                if (idx === count) {
                  return (
                    <Link
                      key={uuidv4()}
                      className="LightLink"
                      to={`${el.link}`}>
                      {`${el.name}`}
                    </Link>
                  )
                } else {
                  return (
                    <Link
                      key={uuidv4()}
                      className="LoginLink"
                      to={`${el.link}`}>
                      {`${el.name}`}
                    </Link>
                  )
                }
              })}
            </>
          )}
          {/* {Token.length ? (
            <>
              <Link className="LoginLink" to="/">
                홈페이지
              </Link>
              <Link className="LoginLink" to="/mypage/order">
                마이페이지
              </Link>
              <Link className="LoginLink" to="/logout">
                로그아웃
              </Link>
            </>
          ) : (
            <>
              <Link className="LoginLink" to="/">
                홈페이지
              </Link>
              <Link className="LoginLink" to="/login">
                로그인
              </Link>
              <Link className="LoginLink" to="/sign-up">
                회원가입
              </Link>
            </>
          )} */}
        </div>
      </NavigationComponent>
    </>
  )
}

export default Navigation
