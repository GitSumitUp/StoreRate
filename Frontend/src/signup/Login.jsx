import React, { useState } from 'react';
import './Registration.css';
import { login } from '../services/authService.js';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; if (!emailRegex.test(formData.email)) { alert("Invalid email format."); return; }
   
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,16}$/; if (!passwordRegex.test(formData.password)) { alert("Password must be 8–16 chars, include uppercase and special character."); return; }

   try{
        const response = await login(formData);

        alert(`User Logged In Sucessfully!!!`)
       
        if (response.token) { 
          localStorage.setItem("token", response.token); 
        }

        if (response.role === "USER") { 
          window.location.href = "/user-dashboard"; 
        } else if (response.role === "ADMIN") { 
          window.location.href = "/admin-dashboard"; 
        } else if (response.role === "STORE_OWNER") {     window.location.href = "/store-dashboard"; 
        } else { alert("Unknown role. Please contact support.");
        } 

      } catch (error) { 
        console.error("Login error:", error); 
        alert("Invalid credentials or server error."); 
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

        <button type="submit" className="submit-btn">
          Login Now
        </button>

        <p className="footer-text">
          Don't have an account? <a href="/register">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;