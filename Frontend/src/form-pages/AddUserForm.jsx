import React , { useState } from 'react'
import './AddUserForm.css'
import { addUser } from '../services/userService.js';

const AddUserForm = () => { 
    const [formData, setFormData] = useState({ 
      name: "", 
      email: "", 
      password: "", 
      address: "", 
      role: "user"
    });

  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData({ ...formData, [name]: value }); 
  }; 

   const onAddUser = async (formData) => {
     try{
      const result = await addUser(formData);
      alert("User added successfully!");
      console.log("User added:", result);
     } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user. Please try again.");
     }
  }
  
  const handleSubmit = (e) => { 
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) { 
      alert("Please fill all required fields."); 
      return; 
    } 
    
    onAddUser(formData); 
    setFormData({ name: "", email: "", password: "", address: "", role: "normal" }); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /> 
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /> 
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required /> 
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} /> 
        <select name="role" value={formData.role} onChange={handleChange}> 
          <option value="user">User</option> 
          <option value="admin">Admin</option> 
          <option value="storeOwner">Store Owner</option> </select> 
          <button type="submit">Add User</button> 
        </form>
    </div>
  )
};

export default AddUserForm