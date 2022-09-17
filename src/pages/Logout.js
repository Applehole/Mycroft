import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageDefaultComponent } from '../styles/PageStyles/DefaultStyle'
import { LogoutComponenet } from '../styles/PageStyles/Logout'
import { useDispatch } from 'react-redux'

function Logout() {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  useEffect(() => {
    dispatch({ type: 'COUNT/CHANGE', number: 2 })
  }) // 그냥 넣으면 무한 리렌더링

  const logoutFunction = () => {
    alert('로그아웃 되었습니다.')
    dispatch({ type: 'TOKEN/LOGIN', token: '' })
    navigate('/')
  }

  return (
    <PageDefaultComponent>
      <LogoutComponenet>
        <button onClick={logoutFunction} className="LogoutButton">
          로그아웃하기
        </button>
      </LogoutComponenet>
    </PageDefaultComponent>
  )
}
export default Logout
