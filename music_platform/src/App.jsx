import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'

function App() {
  return (
    <body>
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
          <div className="navbar-nav me-auto mb-2 mb-lg-1">
            <li className="nav-item">
              <a className="nav-link active" style={{ color: 'white' }} aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" style={{ color: 'white' }} aria-current="page" href="#">Library</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: 'white' }} href="#">Link</a>
            </li>
          </div>
        </div>
        <div>
        </div>  
      </div>
      <div className="d-flex flex-row justify-content-center">
        <div>
          <button className="button_prof" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="fa-solid fa-magnifying-glass icon" style={{ color: 'grey' }}></i>
          </button>
        </div>
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
 </body>
    
  )
}

export default App
