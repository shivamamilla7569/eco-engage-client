import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Login successful! 🎉");
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);

  // try {
  //   const response = await axios.post(
  //     "http://localhost:8080/api/auth/login",
  //     formData
  //   );

  //   toast.success("Login successful! 🎉");

  //   setTimeout(() => {
  //     navigate("/dashboard");
  //   }, 1500);

  // } catch (error) {
  //   toast.error("Login failed ❌");
  //   console.log("Error:", error);
  // }
};

  return (
    <div className="container">
      <div className="login-box">
        <h2 className="title">Login Form</h2>
        {message && <p className="message">{message}</p>}
          <ToastContainer />
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
