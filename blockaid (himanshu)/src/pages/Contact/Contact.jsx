// src/pages/Contact/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [objective, setObjective] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const contactData = { name, email, objective, message };

        try {
            const response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contactData),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Message sent successfully!");
                setName('');
                setEmail('');
                setObjective('');
                setMessage('');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Contact Submission Error:", error);
            alert("Error sending message");
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-header-box">
                <h1>CONTACT</h1>
            </div>
            <div className="contact-content">
                <div className="left-section">
                    <img src="/images/email-image.png" alt="Contact" className="contact-image" />
                    <div className="social-icons">
                        <a href="#email"><img src="/images/email (1).png" alt="Email" /></a>
                        <a href="#phone"><img src="/images/phone.png" alt="Phone" /></a>
                        <a href="#twitter"><img src="/images/twitter.png" alt="Twitter" /></a>
                        <a href="#instagram"><img src="/images/instagram.png" alt="Instagram" /></a>
                    </div>
                </div>
                <div className="right-section">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="input-field">
                            <img src="/images/user.png" alt="User" className="field-icon" />
                            <input type="text" placeholder="NAME" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="input-field">
                            <img src="/images/email.png" alt="Email" className="field-icon" />
                            <input type="email" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="input-field">
                            <img src="/images/target.png" alt="Objective" className="field-icon" />
                            <input type="text" placeholder="OBJECTIVE" value={objective} onChange={(e) => setObjective(e.target.value)} required />
                        </div>
                        <div className="input-field message-field">
                            <img src="/images/sms.png" alt="Message" className="field-icon" />
                            <textarea placeholder="MESSAGE" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
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