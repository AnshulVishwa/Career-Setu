import React from 'react'
import "./OtherStyles/alert.css"
import error from "../assets/Icons/close.png"
import warning from "../assets/Icons/warning.png"

function Alert({msg , type}) {
  return (
    <div className='alert'>
        <div className='circle'>
            <img className='imageLogo' src={
                ( type == "error" ) ? error : warning
            } />
        </div>
        <div className='textbox'>
            <div className='border'></div>
            <div className='content'>{msg}</div>
        </div>
        <div className='overlap'></div>
    </div>
  )
}

export default Alert