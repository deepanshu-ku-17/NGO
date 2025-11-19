// src/pages/Transparency/Transparency.jsx
import React from "react";
import "./Transparency.css";

const Transparency = () => {
    return (
        <div className="transparency-page">
            {/* Top box for title & description */}
            <div className="transparency-header">
                <h1 className="transparency-title">TRANSPARENCY</h1>
                <p className="transparency-description">
                    We’re working with several credible organizations and initiatives to ensure impactful disbursement.
                </p>
            </div>

            {/* Outer Gradient Box */}
            <div className="transparency-container">
                <div className="documents">
                    <div className="document-card">
                        <div className="document-box">
                            <img src="document-icon.png" alt="Document" />
                        </div>
                        <button className="view-btn">View</button>
                    </div>
                    <div className="document-card">
                        <div className="document-box">
                            <img src="document-icon.png" alt="Document" />
                        </div>
                        <button className="view-btn">View</button>
                    </div>
                    <div className="document-card">
                        <div className="document-box">
                            <img src="document-icon.png" alt="Document" />
                        </div>
                        <button className="view-btn">View</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transparency;
