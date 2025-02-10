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
            </div>
         </div>
      </div>
    </div>
    </>
  )
}
