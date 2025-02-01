import React from 'react'
import "./login_signup.css"
import image from "../assets/Login.png"
import logo from "../assets/logo.png"
import { HandleGetUser, HandleSetUser } from '../Handlers/users'

function Login() {
  return (
    <main>
      <img className = "image" src={image} />
      <div className = "elements" >
        <div className = "logo" >
          <img src = {logo} />
        </div>
        <div className = "details" >
          <h1>SignUp</h1>
          <input/>
          <input/>
          <div className = "options">
            <button onClick={() => HandleGetUser("Anshul" , "123" , "Student")}>Student</button>
            <button>Teacher</button>
            <button onClick={() => HandleSetUser("Vidhi" , "156" , "Student")}>Faculty</button>
          </div>
          <button className = "signSubmit" >Submit</button>
        </div>
      </div>
    </main>
  )
}

export default Login