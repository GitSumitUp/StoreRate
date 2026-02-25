import React, { useState, useEffect } from 'react'
import { getAllStores } from "../services/storeService.js";

const StoreList = () => {
  const [storeList, setStoreList] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getAllStores();
        setStoreList(data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };
    fetchStores();
  }, []); 

  return (
    <div style={{
      padding: "24px",
      backgroundColor: "#1e293b", 
      borderRadius: "12px",
      fontFamily: "'Inter', sans-serif",
      width: "100%"
    }}>
      <h3 style={{
        color: "#38bdf8",
        marginBottom: "20px",
        fontSize: "1.5rem"
      }}>
        Store List
      </h3>

      <div style={{
        width: "100%",
        overflowX: "auto",
        borderRadius: "8px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)"
      }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#ffffff",
          overflow: "hidden"
        }}>
          <thead>
            <tr style={{ backgroundColor: "#007bff" }}>
              <th style={{ padding: "12px 15px", color: "white", textAlign: "left" }}>Name</th>
              <th style={{ padding: "12px 15px", color: "white", textAlign: "left" }}>Email</th>
              <th style={{ padding: "12px 15px", color: "white", textAlign: "left" }}>Address</th>
              <th style={{ padding: "12px 15px", color: "white", textAlign: "left" }}>Ratings</th>
              <th style={{ padding: "12px 15px", color: "white", textAlign: "left" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {storeList.length > 0 ? (
              storeList.map((store, index) => (
                <tr key={store.id || index} style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "12px 15px", color: "#1e293b", fontWeight: "500" }}>{store.store_name}</td>
                  <td style={{ padding: "12px 15px", color: "#1e293b" }}>{store.email}</td>
                  <td style={{ padding: "12px 15px", color: "#1e293b" }}>{store.address}</td>
                  <td style={{ padding: "12px 15px" }}>
                    <span style={{
                      backgroundColor: "#fef3c7",
                      color: "#92400e",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      fontWeight: "bold",
                      fontSize: "0.85rem"
                    }}>
                      ⭐ {store.ratings || "N/A"}
                    </span>
                  </td>
                  <td style={{ padding: "12px 15px", whiteSpace: "nowrap" }}>
                    <button style={{
                      padding: "6px 12px",
                      marginRight: "8px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      backgroundColor: "#ffc107",
                      color: "#000",
                      fontWeight: "600"
                    }}>
                      Edit
                    </button>
                    <button style={{
                      padding: "6px 12px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      backgroundColor: "#dc3545",
                      color: "#fff",
                      fontWeight: "600"
                    }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ 
                  padding: "40px", 
                  textAlign: "center", 
                  color: "#64748b" 
                }}>
                  No stores available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreList;