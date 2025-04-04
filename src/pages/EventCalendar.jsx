import React, { useState } from "react";
import "../styles/dashboardstyles/EventCalendar.css"; // Assuming you have a CSS file for styling

const eventsData = [
  { id: 1, title: "Beach Cleanup", date: "2025-04-12", location: "Hyderabad", time: "8:00 AM - 12:00 PM" },
  { id: 2, title: "Tree Plantation Drive", date: "2025-04-18", location: "Chennai", time: "9:00 AM - 2:00 PM" },
  { id: 3, title: "Recycling Awareness Workshop", date: "2025-04-25", location: "Bengaluru", time: "10:00 AM - 3:00 PM" },
];

const EventCalendar = () => {
  const [rsvpedEvents, setRsvpedEvents] = useState([]);

  const handleRSVP = (eventId) => {
    if (!rsvpedEvents.includes(eventId)) {
      setRsvpedEvents([...rsvpedEvents, eventId]);
      alert("You have successfully RSVP’d for this event!");
    }
  };

  return (
    <div className="event-calendar-container">
      <h2>Upcoming Events</h2>
      <ul className="event-list">
        {eventsData.map((event) => (
          <li key={event.id} className="event-item">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <button 
              className={`rsvp-button ${rsvpedEvents.includes(event.id) ? "rsvped" : ""}`}
              onClick={() => handleRSVP(event.id)}
            >
              {rsvpedEvents.includes(event.id) ? "RSVP’d" : "RSVP"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventCalendar;
