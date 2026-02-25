import React, {useState} from 'react'
// import SummaryCards from './components/SummaryCards.jsx'
import UserList from '../../list-pages/UserList.jsx'
import AddUserForm from '../../form-pages/AddUserForm.jsx'
import "../../dashboards/AdminDashboard/AdminDashBoard.css"; 
import AddStoreForm from '../../form-pages/AddStoreForm.jsx'
import StoreList from '../../list-pages/StoreList.jsx';
import LogoutButton from '../../signup/LogoutButton.jsx';

const UserDashboard = () => {
   const [showForm] = useState(false);
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>User Dashboard</h1>
        <LogoutButton />
      </header>

      <main className="dashboard-content">
        {/* <section className="stats-section">
          <SummaryCards />
        </section> */}

        <div className={`dashboard-grid ${!showForm ? "single-column" : ""}`}>
          {/* <section className="form-column">
            <div className="card">
              <h3>Create New Store</h3>
              <AddStoreForm />
            </div>
          </section> */}

          {/* <section className="list-column"> */}
          <section className="single-column">
            <div className="card">
              <StoreList />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
export default UserDashboard