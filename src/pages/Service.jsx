import React from "react";
import "../styles/Service.css"; // Import the styles

const Service = () => {
  const services = [
    {
      title: "Eco-Friendly Transport",
      description: "Promoting sustainable travel solutions like EVs, biking, and public transport.",
      icon: "🚲",
    },
    {
      title: "Waste Management",
      description: "Helping communities reduce, reuse, and recycle waste efficiently.",
      icon: "♻️",
    },
    {
      title: "Renewable Energy",
      description: "Supporting solar, wind, and green energy adoption in daily life.",
      icon: "☀️",
    },
    {
      title: "Green Business Consulting",
      description: "Helping businesses implement sustainable practices for a better future.",
      icon: "🌱",
    },
  ];

  return (
    <div className="service-container">
      <h2>Our Eco-Friendly Services</h2>
      <p>We are committed to making the planet greener with innovative and sustainable solutions.</p>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
