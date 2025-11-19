/* src/pages/Team/Team.jsx */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Team.css";

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        axios.get("/team.json") // Ensure the correct path
            .then(response => setTeamMembers(response.data))
            .catch(error => console.error("Error fetching team data:", error));
    }, []);

    return (
        <div className="team-page">
            {/* Top box for title & description */}
            <div className="team-header">
                <h1 className="team-title">TEAM</h1>
                <p className="team-description">
                    Our community consists of Founders and Innovators who care for the people of our country.
                </p>
            </div>

            {/* Outer Gradient Box */}
            <div className="team-container">
                <div className="team-members">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="member-card">
                            <div className="member-box">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <h2>{member.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
