import React from 'react'
import "./LandingPage.css" 
import { Link } from 'react-router-dom'
export const LandingPage = () => {
  return (
    <div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='d-flex flex-row justify-content-start card_0'>
          <div className='card_1 col-2'>
          <h3>Library</h3>
          </div>
          <div className='card_1 col-8'>
          <h3>Fav Songs</h3>
          </div>
          <div className='card_1 col-2' style={{ marginRight: '100px' }}>
            <h3>Currently Playing</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
