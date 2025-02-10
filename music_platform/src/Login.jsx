import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 login_page">
        <div className="login_card text-center">
          <div className="card-body">
            <i className="fab fa-spotify text-success fa-3x mb-3"></i>
            <h2 className="mb-3">Login to MusicStream</h2>
            <form>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email Address" required />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" required />
              </div>
              <Link to ="/">
                    <button type="submit" className="btn btn-primary w-100">Login</button>
               </Link>
            </form>
            <p className="mt-3 text-white-50">Don't have an account? <a href="#" className="text-success">Sign Up</a></p>
          </div>
        </div>
      </div>
  )
}
