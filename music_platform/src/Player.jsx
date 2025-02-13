import React from 'react'
import "./Player.css"
export const Player = () => {
  return (
    <>
    <div className='container-fluid d-flex flex-column justify-content-end'>
      <div className='row'>
         <div className='col-12'>
 
            <div className='footer'>
                {/* <div className='play_list_card d-flex flex-row justify-content-start'>
                  <img src='public/albums/maharshi.jpg' alt='Liked Album' className='play_list_albums' />
                  <div className="play_list_album_details">
                    <h4 className='artist_name play_list_album_title'>Choti Baatein</h4>
                    <p className='role play_list_album_para'>
                      EP • Devi Sri Prasad
                    </p>
                  </div>
                </div> */}
              <div className='d-flex flex-row justify-content-center '>
                  <i className="fa-solid fa-shuffle skip"></i>
                  <i className="fa-solid fa-backward skip" ></i>
                  <button className='play_button'>
                      <i className="fa-solid fa-play"></i>
                  </button>
                  <i className="fa-solid fa-forward skip"></i>
                  <i className="fa-solid fa-repeat skip"></i>
              </div>
              <div className='progress-container'>
                  <span className='time current-time'>0:01</span>
                  <input type="range" className="progress-bar" min="0" max="100" value="0" />
                  <span className='time total-time'>4:25</span>
             </div>
             {/* <div className='d-flex flex-row justify-content-end align-items-center'>
                  <i className="fa-solid fa-volume-high skip"></i>
                  <div className='d-flex flex-row align-items-center'>
                      <i className="fa-solid fa-list-ul skip"></i>
                  </div>
              </div> */}
            </div>


         </div>
      </div>
    </div>
    </>
  )
}