import React, { useState } from 'react'
import "./login_signup.css"
import image from "../assets/Login.png"
import logo from "../assets/logo.png"
import TextBox from './Fundamentals/TextBox'

function Signup() {
  const [inputVal , setInputVal] = useState(null)
  const [password , setPassword] = useState(null)
  const [ pos , setPos ] = useState(null)

  const [ display , setDisplay ] = useState("none")
  return (
    <main>
      <TextBox msg={"Galat bete"} type="error" display={display} />
      {/* <Alert msg={"Invalid"} type="warning" /> */}
      <img className = "image" src={image} />
      <div className = "elements" >
        <div className = "logo" >
          <img src = {logo} />
        </div>
        <div className = "details" >
          <h1><b>SignUp</b></h1>
          <input placeholder='Enter Username' />
          <div className='passwordDiv'>
            <input placeholder= 'Enter Password' />
            <div className='alter'>
              <span><a className='haveAccount' href='/login'>Have an account?</a></span>
              <span><a className='haveAccount' href='/login'>Login</a></span>
            </div>
          </div>
          <div className = "options">
            <button className='buttons'>Student</button>
            <button className='buttons'>Teacher</button>
            <button className='buttons'>Faculty</button>
          </div>
          <button onClick={() => {
            
            window.location.href = "/startup"
          }} className = "signSubmit" >Submit</button>
        </div>
      </div>
    </main>
  )
}

export default Signup