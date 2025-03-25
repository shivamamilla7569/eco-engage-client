import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get(
        `https://eco-engage-server-1.onrender.com/users`,
        { params: { username: formData.username } } // Axios way to pass query params
      );
  
      const users = response.data; // Axios auto-parses JSON
  
      if (users.length === 0) {
        setMessage("Username not found. Please register first.");
        return;
      }
  
      const user = users[0];
  
      if (user.password !== formData.password) {
        setMessage("Incorrect password. Please try again.");
        return;
      }
  
      setMessage("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/dashboard", { state: { username: user.username, email: user.email } });
      }, 1500);
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2 className="title">Login Form</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Username</label>
            <input
              type="text"
              name="username"
              className="input"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="button">Login</button>
        </form>

        {/* Register Section */}
        <div className="register-section">
          <p>Don't have an account? <span className="register-link" onClick={() => navigate("/register")}>Register here</span></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
