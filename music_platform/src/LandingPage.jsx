import React from 'react'
import "./LandingPage.css" 
import { Link } from 'react-router-dom'
export const LandingPage = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-black bg-body-dark col-12">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <h1 className="d-flex flex-row justify-content-centre">
            <img src="Icons_music_platform/icon_logo.png" alt="logo" className="logo" />
          </h1>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-1 d-flex flex-row justify-content-center" style={{ width: '100%' }}>
            <button className="nav-link active home_but" aria-current="page">
                 <i className="fa-solid fa-house icon_nav m-2"></i>
            </button>
            <div className="search-container d-flex flex-row justify-content-center">
                <div className='search_icon d-flex justify-content-center'>
                    <i className=" fa-solid fa-magnifying-glass"></i>
                </div>
              <input className="search_bar" type="search" placeholder="What do you want to play ?" aria-label="Search" />
              <div className="vertical-line"></div>
              <div>
                <i className="fa-solid fa-book-open icon_nav m-4"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center">
        <div></div>
        <div>
          <button className="button_prof m-auto">
            <i className="fa-solid fa-bell icon" style={{ color: 'grey' }}></i>
          </button>
        </div>
        <div>
          <Link to="/login">
            <button className="button_prof m-auto"  >
              <i className="fa-solid fa-user icon" style={{ color: 'grey' }}></i>
            </button>
          </Link> 
        </div>
      </div>
      </div>
    </nav>
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
