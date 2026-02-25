import React from 'react'
import SummaryCards from './components/SummaryCards.jsx'
import UserList from '../../list-pages/UserList.jsx'
import AddUserForm from '../../form-pages/AddUserForm.jsx'
import "./AdminDashboard.css"; 
import AddStoreForm from '../../form-pages/AddStoreForm.jsx'
import StoreList from '../../list-pages/StoreList.jsx';
import LogoutButton from '../../signup/LogoutButton.jsx';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <LogoutButton />
      </header>

      <main className="dashboard-content">
        <section className="stats-section">
          <SummaryCards />
        </section>

        <div className="dashboard-grid">
          <section className="form-column">
            <div className="card">
              <h3>Create New User</h3>
              <AddUserForm />
            </div>
          </section>

          <section className="list-column">
            <div className="card">
              <UserList />
            </div>
          </section>
        </div>

         <div className="dashboard-grid">
          <section className="form-column">
            <div className="card">
              <h3>Create New Store</h3>
              <AddStoreForm />
            </div>
          </section>

          <section className="list-column">
            <div className="card">
              <StoreList />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
export default AdminDashboard