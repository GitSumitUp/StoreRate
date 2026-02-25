import React, {useState} from 'react'
import { addStore } from '../services/storeService';

  const AddStoreForm = () => { 
      const [storeData, setStoreData] = useState({ 
          name: "", 
          email: "", 
          password: "", 
          address: "", 
          role: "STORE_OWNER"
      });
      
        const handleChange = (e) => { 
          const { name, value } = e.target; 
          setStoreData({ ...storeData, [name]: value }); 
        }; 

      const onAddStore = async () => {
           try{
            const result = await addStore(storeData);
            alert("Store added successfully!");
            console.log("Store added:", result);
           } catch (error) {
            console.error("Error adding store:", error);
            alert("Failed to add store. Please try again.");
           }
        }
        
        const handleSubmit = (e) => { 
          e.preventDefault();
      
          if (!storeData.name || !storeData.email || !storeData.password) { 
            alert("Please fill all required fields."); 
            return; 
          } 
          
          onAddStore(); 
          setStoreData({ name: "", email: "", password: "", address: "", role: "STORE_OWNER" }); 
        };
      
        return (
         <form onSubmit={handleSubmit}> 
              <input type="text" name="name" placeholder="Name" value={storeData.name} onChange={handleChange} required /> 
              
              <input type="email" name="email" placeholder="Email" value={storeData.email} onChange={handleChange} required /> 
              
              <textarea type="text" name="address" placeholder="Address" value={storeData.address} onChange={handleChange} /> 

              <input type="password" name="password" placeholder="Password" value={storeData.password} onChange={handleChange} required />

              <select name="role" value={storeData.role} onChange={handleChange}>
                <option value="storeOwner">Store Owner</option> 
              </select> 

              <button type="submit">Add Store</button> </form>
  )
}

export default AddStoreForm