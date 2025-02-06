import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'

function App() {
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
            <div className="navbar-nav me-auto mb-2 mb-lg-1 d-flex flex-row justify-content-center">
              {/* <li className="nav-item">
                <i className="fa-solid fa-house-user icon_nav"></i>
              </li> */}
              <div className="search-container">
                <button className="search_icon d-flex justify-content-center" aria-label="Search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <input className="search_bar" type="search" placeholder="Search" aria-label="Search" />
                <div className="vertical-line"></div>
                <div>
                  <i className="fa-solid fa-book-open icon_nav"></i>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div></div>
          <div>
            <button className="button_prof m-auto">
              <i className="fa-solid fa-bell icon" style={{ color: 'grey' }}></i>
            </button>
          </div>
          <div>
            <button className="button_prof m-auto">
              <i className="fa-solid fa-user icon" style={{ color: 'grey' }}></i>
            </button>
          </div>
        </div>
      </nav>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <div className='d-flex flex-row justify-content-center'>
              <div className='d-flex flex-row justify-content-center'>
                <h1 className='title'>Discover</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
