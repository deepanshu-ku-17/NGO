// src/pages/Contact/Contact.jsx
import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-header-box">
                <h1>CONTACT</h1>
            </div>
            <div className="contact-content">
                <div className="left-section">
                    <img 
                        src="/images/email-image.png" 
                        alt="Contact"
                        className="contact-image"
                    />
                    <div className="social-icons">
                        <a href="#email"><img src="/images/email (1).png" alt="Email" /></a>
                        <a href="#phone"><img src="/images/phone.png" alt="Phone" /></a>
                        <a href="#twitter"><img src="/images/twitter.png" alt="Twitter" /></a>
                        <a href="#instagram"><img src="/images/instagram.png" alt="Instagram" /></a>
                    </div>
                </div>
                <div className="right-section">
                    <form className="contact-form">
                        <div className="input-field">
                            <img src="/images/user.png" alt="User" className="field-icon" />
                            <input type="text" placeholder="NAME" />
                        </div>
                        <div className="input-field">
                            <img src="/images/email.png" alt="Email" className="field-icon" />
                            <input type="email" placeholder="EMAIL" />
                        </div>
                        <div className="input-field">
                            <img src="/images/target.png" alt="Objective" className="field-icon" />
                            <input type="text" placeholder="OBJECTIVE" />
                        </div>
                        <div className="input-field message-field">
                            <img src="/images/sms.png" alt="Message" className="field-icon" />
                            <textarea placeholder="MESSAGE"></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Submit →
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
