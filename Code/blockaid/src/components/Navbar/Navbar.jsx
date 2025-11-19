// src/components/Navbar/Navbar.jsx
import { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Logo Section */}
            <a href="/" className="logo">
                <img src="/logo only.png" alt="BlockAid Logo" />
                <span>BlockAid</span>
            </a>

            {/* Navigation Links */}
            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                <a href="/team">Team</a>
                <a href="/transparency">Transparency</a>
                <a href="/transaction">Transaction</a>
                <a href="/contact">Contact Us</a>
                <a href="/signup" className="signup-btn">Sign up →</a>
            </div>

            {/* Mobile Menu Icon */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "✖" : "☰"}
            </div>
        </nav>
    );
};

export default Navbar;

