// src/pages/Signup/Signup.jsx
import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      {/* Left Section - Logo Box */}
      <div className="left-box">
        <img src="/images/logo only.png" alt="BlockAid Logo" className="logo" />
        <h1>BlockAid</h1>
      </div>

      {/* Right Section - Sign Up Box */}
      <div className="right-box">
        <div className="signup-box">
          <img src="/images/user.png" alt="User Icon" className="user-icon" />
          <h2>SIGNUP</h2>

          <button className="google-signup">
            <img src="/images/google-icon.png" alt="Google Icon" />
            Continue with Google
          </button>

          <div className="separator">
            <hr /> <span>OR</span> <hr />
          </div>

          <form>
            <div className="name-fields">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <div className="password-field">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                {showPassword ? (
                  // Eye open icon
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ) : (
                  // Eye closed icon
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                )}
              </span>
            </div>

            <button className="signup-button">Register →</button>
          </form>

          <p className="footer-text">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
