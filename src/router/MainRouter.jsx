import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Signup from '../pages/auth/SignUp'

const MainRouter = () => {
  return (
   <Routes>
    <Route path='/signup' element={<Signup />} />
    <Route path='/login' element={<Login />} />
   </Routes>
  )
}

export default MainRouter