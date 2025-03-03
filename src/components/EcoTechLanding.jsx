import React from "react";
import "../styles/EcoTechLanding.css"; // Import external CSS file
import Navbar from "./Navbar";
import TrustSection from "./TrustSection";
import Button from "./Button";
import About from "./About";

const EcoTechLanding = () => {
  return (
    <>
    <div className="container">
      {/* Navbar */}

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h2>
            Embrace a Greener Future with{" "}
            <span className="highlight">EcoTech Solutions</span>
          </h2>
          <p>Discover Sustainable Living Solutions for a Healthier Planet</p>
          <Button displayedtext="Join the Movement"/>
        </div>
        <img
          src="https://source.unsplash.com/400x400/?earth,eco" 
          alt="EcoTech Globe"
          className="hero-image"
          />
      </div>

      {/* Trusted By Section */}
    </div>
      <TrustSection/>
      
      
          </>
  );
};

export default EcoTechLanding;
