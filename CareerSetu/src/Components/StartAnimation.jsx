import React, { useEffect } from 'react'
import logo from "../assets/logo.png"
import video from "../assets/video.mp4"
import "./animation.css"

function StartAnimation() {
    useEffect( () => {
        setTimeout( () => {
            document.querySelector(".content").classList.add("animate")
            setTimeout( () => {
                document.querySelector(".content").classList.add("remove")
            } , 5000 )
            setTimeout( () => {
                document.querySelector(".background").classList.add("backgroundAnimate")
            } , 4800 )
            setTimeout( () => {
                document.querySelector(".background").style.background = "white"
                document.body.innerHTML = `<video className = "video" autoplay><source src="${video}" type="video/mp4"></video>`
            } , 5500 )
            setTimeout( () => {
                document.body.innerHTML = ``
            } , 11500 )
        } , 500 )
    } , [] )
  return (
    <main className="background">
        <div className="content">
            <img className='img' src={logo} />
        </div>
    </main>
  )
}

export default StartAnimation