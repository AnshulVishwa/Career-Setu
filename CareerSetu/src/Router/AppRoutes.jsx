import React from 'react'
import { Routes, Route } from 'react-router-dom';

import App from '../App'
import Login from '../Components/Login';
function AppRoutes() {
  return (
    <>
        <Routes>
          <Route path ="/" element = {<App />}></Route>
          <Route path ="/login" element = {<Login />}></Route>
        </Routes>
    </>
  )
}

export default AppRoutes