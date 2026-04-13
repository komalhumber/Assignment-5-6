# User Profile Administration with Role-Based Access Control (RBAC)

## 📌 Project Overview

This project is a full-stack web application that implements **User Profile Administration with Role-Based Access Control (RBAC)** for an insurance platform.

It allows users to manage their profiles while restricting administrative actions based on user roles.

---

## 🚀 Features Implemented

### 👤 User Features

* View own profile
* Edit own profile
* Self account management

### 🛠️ Admin Features

* View all users
* Create new users
* Edit existing users
* Assign and change roles
* Activate / Suspend user accounts

### 🔐 RBAC Enforcement

* Only **Admin** can access admin routes
* Non-admin users see **"Access Denied"**
* Role-based permissions enforced on frontend and backend

---

## 🧑‍💻 Tech Stack

### Frontend

* React.js
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📡 API Endpoints

### Profile APIs

* `GET /profile/me` → Get logged-in user profile
* `PUT /profile/me` → Update profile

### Admin APIs

* `GET /admin/users` → Get all users
* `POST /admin/users` → Create new user
* `PUT /admin/users/:id` → Update user
* `PUT /admin/users/:id/status` → Change user status
* `PUT /admin/users/:id/role` → Assign role

---

## 🔒 RBAC Rules

* Only Admin can:

  * Create users
  * Update users
  * Assign roles
  * Change account status

* Non-admin users:

  * Cannot access admin pages
  * Receive "Access Denied" message

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup

```bash
cd rbac-backend
npm install
npx nodemon server.js
```

### 🔹 Frontend Setup

```bash
cd rbac-frontend
npm install
npm start
```

---

## 📸 Screenshots

All required screenshots are included in the **/screenshots** folder:

* Profile Page
* Edit Profile
* Admin Users
* Create User
* Edit User
* Role Assignment
* Status Toggle
* Unauthorized Access

---

## 📂 Project Structure

```
rbac-backend/
rbac-frontend/
screenshots/
README.md
```

---

## 👥 Team Members

* Your Name
* Member 2
* Member 3

---

## ✅ Conclusion

This project successfully demonstrates:

* Full user lifecycle management
* Secure role-based access control
* Clean frontend-backend integration

---
