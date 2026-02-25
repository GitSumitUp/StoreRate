# StoreRate – Role-Based Store Rating System

A MERN stack application that enables role-based access for **System Administrators**, **Normal Users**, and **Store Owners** to manage and rate stores. The system provides dashboards, authentication, and CRUD functionalities with proper form validations.

## 🚀 Features

### System Administrator
- Add new stores, normal users, and admin users.
- Dashboard displays:
  - Total number of users
  - Total number of stores
  - Total number of submitted ratings
- Add new users with details: Name, Email, Password, Address.
- View list of stores with: Name, Email, Address, Rating.
- View list of normal and admin users with: Name, Email, Address, Role.
- Apply filters on listings (Name, Email, Address, Role).
- View details of all users (Name, Email, Address, Role).
  - If user is a Store Owner, their store rating is also displayed.
- Logout functionality.

### Normal User
- Sign up and log in.
- Signup form fields: Name, Email, Address, Password.
- Update password after logging in.
- View list of all registered stores.
- Search stores by Name and Address.
- Store listings display:
  - Store Name
  - Address
  - Overall Rating
  - User's Submitted Rating
  - Option to submit or modify rating
- Submit ratings (1–5) for individual stores.
- Logout functionality.

### Store Owner
- Log in to the platform.
- Update password after logging in.
- Dashboard functionalities:
  - View list of users who submitted ratings for their store.
  - See average rating of their store.
- Logout functionality.

---

## 🛡️ Form Validations
- **Name**: Min 20 characters, Max 60 characters.
- **Address**: Max 400 characters.
- **Password**: 8–16 characters, must include at least one uppercase letter and one special character.
- **Email**: Must follow standard email validation rules.

---

## 🔑 Demo Credentials

### Admin
- **Email**: `sumit@gmail.com`  
- **Password**: `Sumit@2003`

### Normal User
- **Email**: `{}`  
- **Password**: `{}`

### Store Owner
- **Email**: `{}`  
- **Password**: `{}`

*(Replace `{}` with actual demo accounts once created.)*

---

## 🛠️ Tech Stack
- **Frontend**: React / Angular (depending on implementation)
- **Backend**: Node.js, Express.js
- **Database**: MySQL / MongoDB
- **Authentication**: JWT + bcrypt
- **Deployment**: GitHub, Render/Netlify/Vercel (optional)

---

## 📦 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/GitSumitUp/StoreRate.git
   cd StoreRate
