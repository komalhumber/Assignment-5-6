# User Profile Administration with Role-Based Access Control (RBAC)

## 📌 Project Overview

This project is a full-stack web application for managing user profiles in an insurance platform. It implements **Role-Based Access Control (RBAC)** along with **JWT-based authentication** to ensure secure access to system features.

---

## 🚀 Features Implemented

### 👤 User Features

* View own profile
* Edit own profile
* Self account management (update details)

### 🛠️ Admin Features

* View all users
* Create new users
* Edit existing users
* Assign and change roles
* Activate / Suspend user accounts

---

## 🔐 Authentication (JWT)

This project uses **JSON Web Tokens (JWT)** for authentication.

* Users can register using `/auth/register`
* Users can login using `/auth/login`
* On successful login, a **JWT token** is generated
* The token must be included in the request header:

```
Authorization: <token>
```

* Protected routes verify the token before allowing access

---

## 🔒 RBAC (Authorization)

Role-based access control is enforced across the system.

### Roles:

* Customer
* Agent
* Underwriter
* Claims Adjuster
* Admin

### Rules:

* Only **Admin** can:

  * Create users
  * Edit users
  * Assign roles
  * Change account status

* Non-admin users:

  * Cannot access admin routes
  * Receive **"Access Denied"**

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
* JSON Web Token (JWT)
* bcrypt.js

---

## 📡 API Endpoints

### Authentication

* `POST /auth/register` → Register new user
* `POST /auth/login` → Login and receive JWT

### Profile

* `GET /profile/me` → Get current user profile
* `PUT /profile/me` → Update profile

### Admin

* `GET /admin/users` → Get all users
* `POST /admin/users` → Create user
* `PUT /admin/users/:id` → Update user
* `PUT /admin/users/:id/status` → Change user status
* `PUT /admin/users/:id/role` → Assign role

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup

```
cd rbac-backend
npm install
npx nodemon server.js
```

### 🔹 Frontend Setup

```
cd rbac-frontend
npm install
npm start
```

---

## 📸 Screenshots

All required screenshots are included in the **/screenshots** folder:

* Login (JWT Token)
* Admin Users with Token
* Profile Page
* Edit Profile
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

* Komal
* Dheerjmarathee
* Muhammad Maaz

---

## ✅ Conclusion

This project demonstrates:

* Secure authentication using JWT
* Role-based authorization (RBAC)
* Full user lifecycle management
* Integration between frontend and backend systems

---
