import React from 'react'
import homebackground from "../../assets/homeBackground.png"
import homelogo from "../../assets/homeLogo.png"
import loginicon from "../../assets/Icons/loginicon.png"
import "./HomePage.css"
import TaskBar from "./TaskBar"
import ActivityTracker from './Containers/ActivityTracker'

function HomePage() {
  return (
    <main className='homeMain'>
      <div className = "homediv" >
        <img className= "image" src = {homebackground}/>
        {/* navbar start */}
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
          <div className = "signup">
            <button className = "signupbtn">Signup<img src = {loginicon} className = "loginicon" /></button>
          </div>
        </div>
        {/* navbar finished */}

        {/* task menu  */}
        <div className = "headinDiv" >  
          <div className="allTaskDiv">
            
            {/* hover of task */}
            <div className='taskbar'>
              <TaskBar/>
            </div>
            {/* hover of task completed */}
            
            {/* heading */}
            <div className = "tagline">
              <p>Empowering Connections</p>
            </div>
          </div>
        </div>
        {/* heading completed */}
        
        <div className ="containerGrid">
          <div className="innerContainer">
            <ActivityTracker />
          </div>
          <div className="innerContainer">
            <ActivityTracker />
          </div>
          <div className="innerContainer">
            <ActivityTracker />
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage