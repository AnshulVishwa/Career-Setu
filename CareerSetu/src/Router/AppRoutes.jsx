import React from 'react'
import { Routes, Route } from 'react-router-dom';

import App from '../App'
import Login from '../Components/Login';
import StartAnimation from '../Components/StartAnimation';
import Signup from '../Components/Signup';
function AppRoutes() {
  return (
    <>
        <Routes>
          <Route path ="/" element = {<App />}></Route>
          <Route path ="/login" element = {<Login />}></Route>
          <Route path ="/signup" element = {<Signup />}></Route>
          <Route path='/startup' element = { <StartAnimation /> } ></Route>
        </Routes>
    </>
  )
}

export default AppRoutes