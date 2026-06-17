# Job Tracker

A full-stack web application to track job applications, built to manage my own job search process. Users can register, log in, and manage their job applications with real-time status updates and visual statistics.

## Features

- User authentication with JWT (register, login, protected routes)
- Add, update, and delete job applications
- Real-time status tracking (Applied, Interview, Offer, Rejected)
- Dashboard with live statistics by status
- Secure password hashing with bcrypt
- Route guards to protect authenticated pages

## Tech Stack

**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt  
**Frontend:** Angular 18, TypeScript, RxJS  
**Tools:** Postman, MongoDB Compass, Git

## Project Structure

job-tracker/

├── backend/

│ ├── models/ # Mongoose schemas (User, Job)

│ ├── routes/ # API routes (auth, jobs)

│ ├── middleware/ # JWT authentication middleware

│ └── server.js

└── frontend/

└── job-tracker-ui/

└── src/app/

├── pages/ # Login, Register, Dashboard components

├── services/ # Auth and Job API services

├── guards/ # Route protection

└── pipes/ # Custom status count pipe

## How to Run Locally

**Backend:**

```bash
cd backend
npm install
npm start
```

**Frontend:**

```bash
cd frontend/job-tracker-ui
npm install
ng serve
```

Visit `http://localhost:4200`

## What I Learned

This project helped me apply JWT authentication and protected routing in a real application, going beyond what I worked on during my internships. It also reinforced REST API design principles and full-stack integration between Angular and Express.
