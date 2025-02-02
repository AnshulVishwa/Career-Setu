import React from 'react'
import homebackground from "../../assets/homeBackground.png"
import homelogo from "../../assets/homeLogo.png"
import "./HomePage.css"
function HomePage() {
  return (
    <main>
      <div className = "homediv" >
        <img className= "image" src = {homebackground}/>
        <div className = "navbar">
          <div className = "logo">
            <img src = {homelogo} className = "logo" />
          </div>
          <div className = "detail">
            <div className = "about" >About</div>
            <div className = "notification" >Notifications</div>
            <div className = "company" >Companies</div>
            <div className = "profile" >Profile</div>
          </div>
          <div className = "signup"></div>
        </div>
      </div>
    </main>
  )
}

export default HomePage