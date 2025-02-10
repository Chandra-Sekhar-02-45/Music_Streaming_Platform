import React from 'react'
import "./LandingPage.css" 
import { Link } from 'react-router-dom'
import { useState } from 'react'
export const LandingPage = () => {

  const [play, setPlay] = useState(true)

  return (
    <div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='d-flex flex-row justify-content-start card_0'>
          <div className='card_1 col-3'>
          <h3>Library</h3>
          </div>
          <div className='card_1 col-6 '>
            <div className='d-flex flex-row justify-content-start selection'>
            <button className='selection_btn'>All</button>
            <button className='selection_btn'>Songs</button>
            <button className='selection_btn'>Podcasts</button>
            </div>
            <div className='d-flex flex-column justify-content-start '>
                <div className='d-flex flex-row justify-content-center'>
                  <div className="album_fav_card">
                      <img src="public/albums/Animal.jpg" alt="Animal Album" className="fav_albums" />
                    <h3 className="album_fav_text">Animal Telugu</h3>
                    <div className="justify-content-center">
                        <button className="album_play">
                            <i className="fa-solid fa-play"></i>
                        </button>
                    </div>
                  </div>
                  <div className="album_fav_card">
                      <img src="public/albums/Alavikuntapuram lo.jpg" alt="Alavikuntapuram Lo" className="fav_albums" />
                    <h3 className="album_fav_text">Alavikuntapuram Lo</h3>
                    <div className="justify-content-center">
                        <button className="album_play">
                            <i className="fa-solid fa-play"></i>
                        </button>
                    </div>
                  </div>
                  <div className="album_fav_card">
                      <img src="public/albums/Avara.jpg" alt="Avara" className="fav_albums" />
                    <h3 className="album_fav_text">Avara</h3>
                    <div className="justify-content-center">
                        <button className="album_play">
                            <i className="fa-solid fa-play"></i>
                        </button>
                    </div>
                  </div>
                </div>
                <div className='d-flex flex-row justify-content-center' >
                  <div className="album_fav_card" style={{ marginTop: '2px' }}  >
                      <img src="public/albums/ZinNaMilDo.jpg" alt="Zindhaghi Dhobar Nahimilega" className="fav_albums" />
                    <h3 className="album_fav_text">Zindagi Na Milegi Dobara</h3>
                    <div className="justify-content-center">
                        <button className="album_play">
                            <i className="fa-solid fa-play"></i>
                        </button>
                    </div>
                  </div>
                  <div className="album_fav_card" style={{ marginTop: '2px' }} >
                      <img src="public/albums/NaaPreuSurya.jpg" alt="Na Peru Surya" className="fav_albums" />
                    <h3 className="album_fav_text">Na Peru Surya</h3>
                    <div className="justify-content-center">
                        <button className="album_play">
                            <i className="fa-solid fa-play"></i>
                        </button>
                    </div>
                  </div>

                  <div className="album_fav_card" style={{ marginTop: '2px' }} onMouseEnter={() => setPlay(true)} onMouseLeave={() => setPlay(false)} >
                      <img src="public/albums/Animal.jpg" alt="Animal Album" className="fav_albums" />
                    <h3 className="album_fav_text">Animal Hindi</h3>
                    <div className="justify-content-center">
                      {
                        play ? <button className="album_play">
                          <i className="fa-solid fa-play"></i>
                        </button> : null
                      }
                    </div>
                  </div>
                </div>
            </div>



          </div>
          <div className='card_1 col-3' style={{ marginRight: '100px' }}>
            <h3>Currently Playing</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
