# Task Manager App

A full-stack Task Manager web application built using React, Node.js, Express, and MongoDB.

This application allows users to:
- Register and login securely
- Create tasks
- Update task status
- Delete tasks
- Organize tasks into workflow stages:
  - Todo
  - In Progress
  - Done

---

# Live Demo

## Frontend Deployment
Add your frontend deployment link here

Example:
https://your-frontend.vercel.app

## Backend Deployment
Add your backend deployment link here

Example:
https://your-backend.onrender.com

---

# Features

## Authentication
- User Registration
- User Login
- JWT Authentication
- Protected API Routes

## Task Management
- Create Tasks
- Update Task Status
- Delete Tasks
- View Tasks by Stage

## UI Features
- Responsive Design
- Modern Dashboard UI
- Toast Notifications
- Loading & Error Handling
- Mobile Friendly Layout
- Interactive Task Cards

---

# Tech Stack

## Frontend
- React
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- React Hot Toast
- Lucide React

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

---

# Folder Structure

```bash
TASK-MANAGER-APP/
│
├── backend/
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── .gitignore
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/bharathv005/TASK-MANAGER-APP.git
```

Move into project folder:

```bash
cd TASK-MANAGER-APP
```

---

# Frontend Setup

Move to frontend folder:

```bash
cd frontend
```

Install frontend dependencies:

```bash
npm install
```

Run frontend server:

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Backend Setup

Open new terminal.

Move to backend folder:

```bash
cd backend
```

Install backend dependencies:

```bash
npm install
```

Run backend server:

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Environment Variables

Create a `.env` file inside backend folder.

Example:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

---

# API Endpoints

# Authentication APIs

## Register User

```http
POST /api/auth/register
```

### Request Body

```json
{
  "name": "Bharath",
  "email": "bharath@gmail.com",
  "password": "123456"
}
```

---

## Login User

```http
POST /api/auth/login
```

### Request Body

```json
{
  "email": "bharath@gmail.com",
  "password": "123456"
}
```

---

# Task APIs

## Get All Tasks

```http
GET /api/tasks
```

---

## Create Task

```http
POST /api/tasks
```

### Request Body

```json
{
  "title": "Complete Assignment",
  "stage": "Todo"
}
```

---

## Update Task

```http
PUT /api/tasks/:id
```

### Request Body

```json
{
  "stage": "Done"
}
```

---

## Delete Task

```http
DELETE /api/tasks/:id
```

---

# Authentication Flow

```text
User Registers
      ↓
User Logs In
      ↓
JWT Token Generated
      ↓
Frontend Stores Token
      ↓
Protected APIs Accessed
```

---

# Database Schema

## User Schema

```js
{
  name: String,
  email: String,
  password: String
}
```

---

## Task Schema

```js
{
  title: String,
  stage: String,
  userId: ObjectId
}
```

---

# UI Design Decisions

- Used Tailwind CSS for rapid styling
- Used responsive grid layout
- Used card-based task display
- Added toast notifications for better UX
- Used minimal and clean modern UI design

---

# Assumptions

- Single-user task management system
- Tasks only belong to logged-in users
- Minimal validation used for faster implementation
- Only three task stages supported

---

# Tradeoffs

- Used local component state instead of Redux
- Did not implement drag-and-drop to keep project lightweight
- Focused more on functionality and clean structure

---

# Technical Decisions

## Why React + Vite?
- Fast development
- Lightweight setup
- Better developer experience

## Why Tailwind CSS?
- Faster UI development
- Responsive utility classes
- Clean modern design

## Why MongoDB Atlas?
- Free cloud database hosting
- Easy integration with Node.js

## Why JWT?
- Lightweight authentication
- Secure protected APIs

---

# Future Improvements

- Drag and Drop Tasks
- Dark Mode
- Due Dates
- Task Priority Levels
- Search and Filters
- Profile Management
- Real-time Updates

---

# Deployment

## Frontend
Recommended:
- Vercel
- Netlify

## Backend
Recommended:
- Render
- Railway

---

# GitHub Repository

Repository Link:

https://github.com/bharathv005/TASK-MANAGER-APP

---

# Author

## Bharath V

GitHub:
https://github.com/bharathv005

---

# Submission Notes

This project was developed as part of an internship assessment task.

Focus areas:
- Clean UI
- Full-stack implementation
- Authentication
- REST APIs
- Responsive Design
- Proper project structure
