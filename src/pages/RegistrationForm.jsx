import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RegistrationForm.css"; // Import CSS file

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Check if username already exists
    const { data: existingUsernames } = await axios.get(
      "https://eco-engage-server-1.onrender.com/users",
      { params: { username: formData.username } }
    );

    if (existingUsernames.length > 0) {
      setMessage("Username is already taken. Please choose a different username.");
      return;
    }

    // Check if email already exists
    const { data: existingEmails } = await axios.get(
      "https://eco-engage-server-1.onrender.com/users",
      { params: { email: formData.email } }
    );

    if (existingEmails.length > 0) {
      setMessage("Email is already registered. Please use a different email.");
      return;
    }

    // Proceed with registration
    const response = await axios.post(
      "https://eco-engage-server-1.onrender.com/users",
      formData, // No need to stringify; Axios handles it automatically
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.status === 201 || response.status === 200) {
      setMessage("Registration successful! Redirecting to login...");
      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        dateOfBirth: "",
        gender: "",
        password: "",
      });

      // ✅ Redirect Immediately After Registration
      navigate("/login");
    } else {
      setMessage("Error registering user.");
    }
  } catch (error) {
    setMessage("An error occurred. Please try again.");
    console.error("Error:", error);
  }
};

  return (
    <div className="container">
      <div className="form-container">
        <h2>Registration Form</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="input-field" required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="input-field" required />
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="input-field" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input-field" required />
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="input-field" required />

          <select name="gender" value={formData.gender} onChange={handleChange} className="input-field" required>
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="input-field" required />

          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
