import React, { useState } from 'react';
import './Registration.css';
import { useNavigate } from "react-router-dom";
import { register } from '../services/authService.js';

const Registration = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name.length < 20 || formData.name.length > 60) { 
      alert("Name must be between 20 and 60 characters."); return; }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; if (!emailRegex.test(formData.email)) { alert("Invalid email format."); return; }
   
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,16}$/; if (!passwordRegex.test(formData.password)) { alert("Password must be 8–16 chars, include uppercase and special character."); return; }

    if (formData.address.length > 400) { alert("Address cannot exceed 400 characters."); return; }

    try{
        const response = await register(formData);
        console.log("Registration successful:", response);
        alert("Registration successful!");
        navigate('/user-dashboard');
      } catch (error) {
        console.error("Registration error:", error);
        alert("An error occurred during registration. Please try again.");
      }
  };

  return (
    <div className="form-container">
      <form className="registration-card" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Create Account</h2>
          <p>Join our community today</p>
        </div>

        <div className="input-group">
          <label>Full Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your full name" 
            value={formData.name}
            onChange={handleChange}
            minLength={20}
            maxLength={60}
            required 
          />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input 
            type="email" 
            name="email" 
            placeholder="name@company.com" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="••••••••" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>

           <div className="input-group">
            <label>Address</label>
            <textarea 
              type="text" 
              name="address" 
              placeholder="Enter your address" 
              value={formData.address}
              onChange={handleChange}
              maxLength={400}
              required 
            />
          </div>
        <button type="submit" className="submit-btn">
          Register Now
        </button>

        <p className="footer-text">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </form>
    </div>
  );
};

export default Registration;