import React, { useState } from 'react'
// import SummaryCards from './components/SummaryCards.jsx'
import UserList from '../../list-pages/UserList.jsx'
import AddUserForm from '../../form-pages/AddUserForm.jsx'
import "../../dashboards/AdminDashboard/AdminDashBoard.css"; 
import AddStoreForm from '../../form-pages/AddStoreForm.jsx'
import StoreList from '../../list-pages/StoreList.jsx';
import LogoutButton from '../../signup/LogoutButton.jsx';

const StoreOwnerDashboard = () => {
  const [showForm] = useState(false);
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Store Owner Dashboard </h1>
        <LogoutButton />
      </header>

      <main className="dashboard-content">
          <div className={`dashboard-grid ${!showForm ? "single-column" : ""}`}>
          {/* <section className="form-column">
            <div className="card">
              <h3>Create New User</h3>
              <AddUserForm />
            </div>
          </section> */}

          <section className="list-column">
            <div className="card">
              <UserList />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
export default StoreOwnerDashboard
