import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
      <div class="container-fluid d-flex justify-content-center align-items-center min-vh-100 login_page">
        <div class="login_card text-center">
          <div class="card-body">
            <i class="fab fa-spotify text-success fa-3x mb-3"></i>
            <h2 class="mb-3">Login to MusicStream</h2>
            <form>
              <div class="mb-3">
                <input type="email" class="form-control" placeholder="Email Address" required />
              </div>
              <div class="mb-3">
                <input type="password" class="form-control" placeholder="Password" required />
              </div>
              <Link to ="/">
                    <button type="submit" class="btn btn-primary w-100">Login</button>
               </Link>
            </form>
            <p class="mt-3 text-white-50">Don't have an account? <a href="#" class="text-success">Sign Up</a></p>
          </div>
        </div>
      </div>
  )
}
