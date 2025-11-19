// src/pages/Login/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const credentials = { email, password };

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("token", data.token);
                alert("Login successful! Redirecting to transaction page...");
                navigate("/transaction");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Login Error:", error);
            alert("Error logging in");
        }
    };

    return (
        <div className="login-container">
            <div className="left-box">
                <img src="/images/logo only.png" alt="BlockAid Logo" className="logo" />
                <h1>BlockAid</h1>
            </div>
            <div className="right-box">
                <div className="login-box-content">
                    <img src="/images/user.png" alt="User Icon" className="user-icon" />
                    <h2>LOGIN</h2>
                    <button className="google-login">
                        <img src="/images/google-icon.png" alt="Google Icon" />
                        Continue with Google
                    </button>
                    <div className="separator">
                        <hr /> <span>OR</span> <hr />
                    </div>
                    <form onSubmit={handleLogin}>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <div className="password-field">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                            <span className="eye-icon" onClick={togglePasswordVisibility}>
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                        <line x1="1" y1="1" x2="23" y2="23"></line>
                                    </svg>
                                )}
                            </span>
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#forgot">Forgot Password</a>
                        </div>
                        <button type="submit" className="login-button">LOGIN →</button>
                    </form>
                    <p className="footer-text">
                        Don't have an account? <a href="/signup">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;