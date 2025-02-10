import React from 'react'
import "./LandingPage.css" 
import { Link } from 'react-router-dom'
export const LandingPage = () => {
  return (
    <div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='d-flex flex-row justify-content-start card_0'>
          <div className='card_1 col-3'>
          <h3>Library</h3>
          </div>
          <div className='card_1 col-6'>
          <h3>Fav Songs</h3>
          </div>
          <div className='card_1 col-3' style={{ marginRight: '100px' }}>
            <h3>Currently Playing</h3>
          </div>
        </div>
      </div>
    </div>
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
  </div>
  )
}
