import React from 'react'
import "./LandingPage.css" 
import { Link } from 'react-router-dom'
import { useState } from 'react'
export const LandingPage = () => {


  return (
    <div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='d-flex flex-row justify-content-start card_0'>

        <div className='card_1 col-3 '>
          <div className='library_container'>

          <div className='d-flex flex-row justify-content-between'> 
              <div className='d-flex flex-row justify-content-start'>
                <i className="fa-regular fa-folder-open icon icon_nav"></i>
                <p className='library_text'>Your Library</p>
              </div>
              <div className='d-flex flex-row justify-content-end'>
                <i className="fa-solid fa-plus icon icon_nav"></i>
                <i className="fa-solid fa-arrow-right icon icon_nav"></i>
              </div>
            </div>

            <div className='d-flex flex-row justify-content-start'>
              <button className='selection_btn'>Playlist</button>
              <button className='selection_btn'>Albums</button>
              <button className='selection_btn'>Podcasts</button>
              <button className='selection_btn'>Artists</button>
              <button className='selection_btn'>Downloaded</button>
            </div>

            <div className='d-flex flex-row justify-content-end'>
              <i className="fa-solid fa-magnifying-glass icon icon_nav"></i>
              <p className='show-all para'>Recents <span><i className="fa-solid fa-bars icon icon_nav"></i></span></p>
            </div>

            <div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='public/Icons_music_platform/likedalbum.png' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Liked Songs</h4>
                      <p className='role play_list_album_para'>
                        <span><i className="fa-solid fa-thumbtack playlist_pin" ></i></span>
                        Playlist • 100 songs
                      </p>
                   </div>
                </div>
              </div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='public/albums/allTimeHindhi.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>All Time Top 50</h4>
                      <p className='role play_list_album_para'>
                        <span><i className="fa-solid fa-thumbtack playlist_pin" ></i></span>
                        Playlist • You
                      </p>
                   </div>
                </div>
              </div>

              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='public/albums/Devara.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Devara</h4>
                      <p className='role play_list_album_para'>
                        Album • Anirudh Ravichander
                      </p>
                   </div>
                </div>
              </div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='public/albums/maatavinali.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Hari Hara Veera Mallu</h4>
                      <p className='role play_list_album_para'>
                        EP • M. M. Keeravaani
                      </p>
                   </div>
                </div>
              </div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='public/albums/salar.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Saalar</h4>
                      <p className='role play_list_album_para'>
                        Single • Ravi Basrur
                      </p>
                   </div>
                </div>
              </div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='public/albums/pushpa.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Pushpa</h4>
                      <p className='role play_list_album_para'>
                        EP • Devi Sri Prasad
                      </p>
                   </div>
                </div>
              </div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='public/albums/jersy.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Jersey</h4>
                      <p className='role play_list_album_para'>
                        Single • Anirudh Ravichander
                      </p>
                   </div>
                </div>
              </div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='public/albums/orange.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Orange</h4>
                      <p className='role play_list_album_para'>
                        Album • Harris Jayaraj
                      </p>
                   </div>
                </div>
              </div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='public/albums/Animal-2.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Animal</h4>
                      <p className='role play_list_album_para'>
                        EP • Manan Bhardwaj
                      </p>
                   </div>
                </div>
              </div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='public/albums/maharshi.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Maharshi</h4>
                      <p className='role play_list_album_para'>
                        EP • Devi Sri Prasad
                      </p>
                   </div>
                </div>
              </div>

              </div>




          </div>
        </div>

          
          <div className='card_1 col-6  selection'>
            <div className='d-flex flex-row justify-content-start'>
              <button className='selection_btn'>All</button>
              <button className='selection_btn'>Songs</button>
              <button className='selection_btn'>Podcasts</button>
            </div>

            <div className='d-flex flex-column justify-content-start '>
                <div className='d-flex flex-row justify-content-center'>
                  <div className="album_fav_card">
                      <img src="public/albums/Magadheera.jpg" alt="Magadheera Album" className="fav_albums" />
                    <h3 className="album_fav_text">Magadheera</h3>
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

                  <div className="album_fav_card" style={{ marginTop: '2px' }}  >
                      <img src="public/albums/Animal.jpg" alt="Animal Album" className="fav_albums" />
                    <h3 className="album_fav_text">Animal Telugu</h3>
                    <div className="justify-content-center">
                      {
                        <button className="album_play">
                          <i className="fa-solid fa-play"></i>
                        </button> 
                      }
                    </div>
                  </div>
                </div>
            </div>


            <div>
              <h1 className="made-for-you-title">Made For You</h1>
              <p className='d-flex justify-content-end show-all'>Show All</p>
              <div className="made-for-you">
                <div className="made-for-you-container">
                <div className="made-for-you-card">
                    <img src="public/albums/hiiNana.jpg" alt="Hi Nana" className="made-for-you-album" />
                    <p className="made-for-you-text">Hi Nana<br></br> <span >By Hesham Abdul Wahab</span> </p>
                </div>
                <div className="made-for-you-card">
                    <img src="public/albums/Devara.jpg" alt="Devara Album" className="made-for-you-album" />
                    <p className="made-for-you-text">Devara<br></br> <span >By Anirudh</span> </p>
                </div>
                  <div className="made-for-you-card">
                    <img src="public/albums/salar.jpg" alt="allTimeHindhi" className="made-for-you-album" />
                    <p className="made-for-you-text">Salaar Pt. 1 - Ceasefire<br></br> <span >By Ravi Basrur</span></p>
                  </div>
                  <div className="made-for-you-card">
                    <img src="public/albums/GunturKaram.jpg" alt="Guntur Karam Album" className="made-for-you-album" />
                    <p className="made-for-you-text">Guntur Kaaram<br></br> <span >By S. Thaman</span> </p>
                  </div>
                  <div className="made-for-you-card">
                    <img src="public/albums/Animal-2.jpg" alt="Animal Album" className="made-for-you-album" />
                    <p className="made-for-you-text">Animal ( Original Motion Picture Soundtrack ) . . .</p>
                  </div>

                  <div className="made-for-you-card">
                    <img src="public/albums/justinBieber.jpg" alt="Another Album" className="made-for-you-album" />
                    <p className="made-for-you-text">Justin Bieber My World 2.0<br></br><span >By Music</span> </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="made-for-you-title">Today's Biggest Hits</h1>
              <p className='d-flex justify-content-end show-all'>Show All</p>
              <div className="made-for-you">
                <div className="made-for-you-container">
                <div className="made-for-you-card">
                    <img src="public/albums/allTimeHindhi.jpg" alt="allTimeHindhi" className="made-for-you-album" />
                    <p className="made-for-you-text">All Time To 50 Songs Hindi<br></br> <span >By Music</span></p>
                  </div>
                <div className="made-for-you-card">
                    <img src="public/albums/GunturKaram.jpg" alt="Guntur Karam Album" className="made-for-you-album" />
                    <p className="made-for-you-text">Guntur Kaaram<br></br> <span >By S. Thaman</span> </p>
                  </div>
                <div className="made-for-you-card">
                    <img src="public/albums/hiiNana.jpg" alt="Hi Nana" className="made-for-you-album" />
                    <p className="made-for-you-text">Hi Nana<br></br> <span >By Hesham Abdul Wahab</span> </p>
                </div>
                <div className="made-for-you-card">
                    <img src="public/albums/Devara.jpg" alt="Devara Album" className="made-for-you-album" />
                    <p className="made-for-you-text">Devara<br></br> <span >By Anirudh</span> </p>
                </div>

                <div className="made-for-you-card">
                    <img src="public/albums/justinBieber.jpg" alt="Another Album" className="made-for-you-album" />
                    <p className="made-for-you-text">Justin Bieber My World 2.0<br></br><span >By Music</span> </p>
                  </div>
                  <div className="made-for-you-card">
                    <img src="public/albums/Animal-2.jpg" alt="Animal Album" className="made-for-you-album" />
                    <p className="made-for-you-text">Animal ( Original Motion Picture Soundtrack ) . . .</p>
                  </div>

                </div>
              </div>
            </div>
          </div>

        
          <div className='card_1 col-3 currently_playing'>
            <div className='currently_playing_container'>
              <div className='content_wrapper d-flex flex-column justify-content-start align-items-center text-center'>
                <div className='d-flex flex-row justify-content-between align-items-left w-100 px-3'>
                  <h4 className='library_text'>Varadha's One Man Army - Salaar</h4>
                  <div className='icon_group d-flex'>
                    <i className="fa-solid fa-ellipsis options_icon" title="More options"></i>
                    <i className="fa-solid fa-x close_icon" title="Close"></i>
                  </div>
                </div>
                <div >
                  <img src="/public/albums/salar.jpg" alt="Salaar Album Cover" className="currently_album" />
                </div>
                <div className='track_details'>
                <div className="song_info">
                  <h4 className='track_title'>Varadha's One Man Army</h4>
                </div>
                <p className='artist_name'>Ravi Basrur</p>
              </div>
              </div>

              <div className='credits_section'>
                  <h4 className='credits_title'>Credits</h4>
                  <div className='credits_content'>
                    <div className='credits_item d-flex flex-column justify-content-start'>
                      <div className='d-flex flex-row justify-content-between align-items-center'>
                        <h3 className='artist_name'>Ravi Basrur</h3>
                        <p className='show-all'>Show all</p>
                      </div>
                      <h4 className='role'>Main Artist, Composer</h4>
                      <button className='follow_button'>Follow</button>
                    </div>
                  </div>
                </div>

                <div className='queue_section'>
                  <h4 className='queue_title'>Queue</h4>
                  <div className='queue_content'>
                    <div className='queue_item d-flex flex-row justify-content-between align-items-center'>
                      <div className='queue_info'>
                        <h4 className='queue_track_title'>Adiga Adiga - Ninnu Kori</h4>
                        <p className='queue_artist_name'>Sid Sriram</p>
                      </div>
                      <i class="fa-solid fa-minus queue_options_icon" title="More options"></i>
                    </div>
                    <div className='queue_item d-flex flex-row justify-content-between align-items-center'>
                    <div className='queue_info'>
                        <h4 className='queue_track_title'>Rock On Bro - Janatha Garage</h4>
                        <p className='queue_artist_name'>Ragu Dixit</p>
                      </div>
                      <i class="fa-solid fa-minus queue_options_icon" title="More options"></i>
                    </div>
                  </div>
                </div>
            </div>
          </div>

            </div>
        </div>
      </div>
    </div>

  )
}
