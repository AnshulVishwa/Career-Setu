import React from 'react'
import "./TaskBar.css";
function TaskBar() {
  return (
    <div className = "alltask">
        <div className = "taskmenu">
            <div className = "task" onMouseOver={() => {
          document.querySelector(".triangle").style.display = "block"
          document.addEventListener( "click" , () => {
            document.querySelector(".triangle").style.display = "none"
          } )
        }}>
                <div className='gridBox'>
                    <div className="box1" ></div>
                    <div className="box2"></div>
                    <div className="box1"></div>
                    <div className="box1"></div>
                </div>
                <span className ="menu">Menu</span>
            </div>
        </div>
        <div className= "triangle">
          <div className='upperDiv'>
            <div className='task'></div>
            <div className='task'></div>
          </div>
          <div className='midDiv'>
            <div className='task'></div>
            <div className='task'></div>
          </div>
          <div className='lowerDiv'>
            <div className='task'></div>
          </div>
        </div>
    </div>
  )
}

export default TaskBar