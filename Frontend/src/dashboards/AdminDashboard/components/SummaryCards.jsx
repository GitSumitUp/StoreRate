import React, {useEffect, useState} from 'react'
import { getAllUsers } from '../../../services/userService.js'
import { getAllStores } from '../../../services/storeService.js'
// import { getAllRatings } from '../../../services/ratingService.js'


const SummaryCards = () => {

  const [users, setUsers] = useState([]);
  const [stores, setStores] = useState([]);

  // const [ratings, setRatings] = useState([]);

  useEffect(() => {
      const fetchUsers = async () => {
        try{
          const data = await getAllUsers();
          setUsers(data);
        } catch (error) {
          console.error("Error fetching users:", error);
      }
    }; fetchUsers();

    const fetchStores = async () => {
        try{
          const data = await getAllStores();
          setStores(data);
        } catch (error) {
          console.error("Error fetching stores:", error);
        }
      }; fetchStores();
   })

  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
      <div style={{
        flex: 1,
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center",
        color: "#072997",
        backgroundColor: "#f9f9f9"
      }}>
        <h4 style={{ fontSize: "20px", fontWeight: "650" }}>Total Users</h4>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>{users.length}</p>
      </div>

      <div style={{
        flex: 1,
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center",
        color: "#072997",
        backgroundColor: "#f9f9f9"
      }}>
        <h4 style={{ fontSize: "20px", fontWeight: "650" }}>Total Stores</h4>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>{stores.length}</p>
      </div>

      <div style={{
        flex: 1,
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center",
        color: "#072997",
        backgroundColor: "#f9f9f9"
      }}>
        <h4 style={{ fontSize: "20px", fontWeight: "650" }}>Total Ratings</h4>
        {/* <p style={{ fontSize: "24px", fontWeight: "bold" }}>{totalRatings}</p> */}
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>{0}</p>
      </div>
    </div>
  );
};

export default SummaryCards