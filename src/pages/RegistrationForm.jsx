import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/RegistrationForm.css"; // If inside a styles folder

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if username already exists
      const checkUsernameResponse = await fetch(`https://eco-engage-server-1.onrender.com/users?username=${formData.username}`);
      const existingUsernames = await checkUsernameResponse.json();

      if (existingUsernames.length > 0) {
        setMessage("Username is already taken. Please choose a different username.");
        return;
      }

      // Check if email already exists
      const checkEmailResponse = await fetch(`https://eco-engage-server-1.onrender.com/users?email=${formData.email}`);
      const existingEmails = await checkEmailResponse.json();

      if (existingEmails.length > 0) {
        setMessage("Email is already registered. Please use a different email.");
        return;
      }

      // Proceed with registration if username and email are not found
      const response = await fetch("https://eco-engage-server-1.onrender.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Registration successful!");
        setFormData({ username: "", email: "", password: "" });

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setMessage("Error registering user.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className='container'>
      
    <div className="form-container">
      <h2>Registration Form</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={formData.username} 
          onChange={handleChange} 
          className="input-field" 
          required
          />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          className="input-field" 
          required
          />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          className="input-field" 
          required
          />
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
          </div>
  );
};

export default RegistrationForm;
