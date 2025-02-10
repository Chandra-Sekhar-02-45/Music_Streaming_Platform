import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="login_back container-fluid d-flex flex-row justify-content-center align-items-center min-vh-100 login-page">
      <div className="login_card text-center">
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <img src="Icons_music_platform/icon_logo.png" alt="logo" className="login_logo" />
          </div>
          <h1 className="mb-3 login_head">Log in to Music</h1>
          <div>
            <button className="form-control mb-3 login-ways d-flex flex-row" type="submit">
              <i className="fa-brands fa-google" style={{ marginRight: '10px' }}></i>
              Continue With Google
            </button>
            <button className="form-control mb-3 login-ways d-flex flex-row" type="submit">
              <i className="fa-brands fa-facebook" style={{ marginRight: '10px' }}></i>
              Continue With Facebook
            </button>
            <button className="form-control mb-3 login-ways d-flex flex-row" type="submit">
              <i className="fa-brands fa-apple" style={{ marginRight: '10px' }}></i>
              Continue With Apple
            </button>
            <button className="form-control mb-3 login-ways d-flex flex-row" type="submit">
              <i className="fa-solid fa-phone" style={{ marginRight: '10px' }}></i>
              Continue With Phone Number
            </button>
          </div>

          <form>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email Address" required />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Password" required />
            </div>
          </form>
          <Link to="/">
            <button type="submit" className="btn btn-primary login_button w-100 mt-3">Login</button>
          </Link>
          <p className="mt-3 text-white-50">Don't have an account? <a href="#" className="text-white">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}
