import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Mypage from '../pages/Mypage'
import MypageDetail from '../pages/MypageDetail'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/mypagedetail" element={<MypageDetail />} />
    </Routes>
  )
}

export default AppRouter
