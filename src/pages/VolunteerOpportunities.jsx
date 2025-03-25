import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboardstyles/VolunteerOpportunities.css";

const VolunteerOpportunities = () => {
  const navigate = useNavigate();

  return (
    <div className="volunteer-container">
      <h1 className="volunteer-title">Volunteer Opportunities 🌍</h1>
      <p className="volunteer-subtitle">
        Find local eco-friendly volunteering options and make a difference!
      </p>

      <div className="volunteer-list">
        <div className="volunteer-card">
          <h2>Tree Plantation Drive</h2>
          <p>Join us in planting trees in your local community.</p>
          <button className="volunteer-button">Join Now</button>
        </div>

        <div className="volunteer-card">
          <h2>Beach Cleanup</h2>
          <p>Help remove plastic waste and save marine life.</p>
          <button className="volunteer-button">Join Now</button>
        </div>

        <div className="volunteer-card">
          <h2>Recycling Awareness</h2>
          <p>Spread awareness about proper waste management.</p>
          <button className="volunteer-button">Join Now</button>
        </div>
      </div>

      <button className="back-button" onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default VolunteerOpportunities;
