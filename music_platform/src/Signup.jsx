import React from 'react';
import "./Login.css"; // Reusing the same CSS for consistent styling
import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
    <div className="login-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-card text-center">
        <div className="card-body">
          <div className="logo-container">
            <img src="Icons_music_platform/icon_logo.png" alt="Music Platform Logo" className="login-logo" />
          </div>
          <h2 className="login-title">Create an Account</h2>
          <p className="login-subtitle">Sign up to start your journey with Music</p>
          
          <form>
            <div className="input-group">
              <input type="text" className="form-input" placeholder="Username" required />
            </div>
            <div className="input-group">
              <input type="email" className="form-input" placeholder="Email Address" required />
            </div>
            <div className="input-group">
              <input type="password" className="form-input" placeholder="Password" required />
            </div>
            <div className="input-group">
              <input type="password" className="form-input" placeholder="Confirm Password" required />
            </div>
            <Link to="/home">
              <button type="submit" className="login-btn">Sign Up</button>
            </Link>
          </form>
          
          <p className="signup-text">Already have an account? <Link to="/login">Log In</Link></p>
        </div>
      </div>
    </div>
  );
}