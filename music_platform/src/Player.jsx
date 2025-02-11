import React from 'react'
import "./Player.css"
export const Player = () => {
  return (
    <>
    <div className='container-fluid d-flex flex-column justify-content-end'>
      <div className='row'>
         <div className='col-12'>
            <div className='footer'>
              <div className='d-flex flex-row justify-content-center'>
                  <i className="fa-solid fa-shuffle skip"></i>
                  <i className="fa-solid fa-backward skip" ></i>
                  <button className='play_button'>
                      <i className="fa-solid fa-play"></i>
                  </button>
                  <i className="fa-solid fa-forward skip"></i>
                  <i className="fa-solid fa-repeat skip"></i>
              </div>
              <div className='progress-container'>
                  <span className='time current-time'>0:00</span>
                  <input type="range" className="progress-bar" min="0" max="100" value="0" />
                  <span className='time total-time'>3:45</span>
             </div>
            </div>
         </div>
      </div>
    </div>
    </>
  )
}
