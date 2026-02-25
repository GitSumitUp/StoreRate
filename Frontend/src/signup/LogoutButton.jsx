import React from 'react'
import { logout } from '../services/authService.js';
import { useNavigate } from "react-router-dom";
const LogoutButton = () => {

  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
      await logout();
      localStorage.removeItem("token");
      navigate('/login');
    } catch (error) {
      console.error("Logout error:", error);
      alert("An error occurred during logout. Please try again.");
    }
  }
  
  return (
    <button onClick={handleLogout} style={{ padding: "8px 16px", cursor: "pointer", backgroundColor: "red", color: "white" }}> Logout </button>
  )
}

export default LogoutButton