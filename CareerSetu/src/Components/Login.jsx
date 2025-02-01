import React from 'react'
import image from "../assets/LoginPage.png"

function Login() {
    console.log(image)
  return (
    <div className = "main" >
        <div className = "logo" >
            <div className = "image" >
                <img src={image} />
            </div>
        </div>
        <div className = "details" ></div>
    </div>
  )
}

export default Login