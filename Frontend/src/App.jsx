// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/App.css'
import Register from './signup/Registration.jsx'
import AdminDashboard from './dashboards/AdminDashboard/AdminDashboard.jsx'
import AddUserForm from './form-pages/AddUserForm.jsx'
import UserList from './list-pages/UserList.jsx'
import AddStoreForm from './form-pages/AddStoreForm.jsx'
import StoreList from './list-pages/StoreList.jsx'
import Login from './signup/Login.jsx'
import UserDashboard from './dashboards/UserDashboard/UserDashboard.jsx'
import StoreOwnerDashboard from './dashboards/StoreOwnerDashboard/StoreOwnerDashboard.jsx'
// import Navbar from './components/Navbar.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        {/* <AdminDashboard/> */}
        <Routes>
          <Route path="/storeList" element={<StoreList />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/addUserForm" element={<AddUserForm />} />
          <Route path="/addStoreForm" element={<AddStoreForm />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/store-dashboard" element={<StoreOwnerDashboard />} />
          <Route path="/" element={<AdminDashboard />} />
           <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
