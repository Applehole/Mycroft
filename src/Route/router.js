import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Mypage from '../pages/Mypage'
import MypageDetail from '../pages/MypageDetail'
import Logout from '../pages/Logout'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/mypage/order" element={<Mypage />} />
      <Route path="/mypage/order/:ItemId" element={<MypageDetail />} />
    </Routes>
  )
}

export default AppRouter
