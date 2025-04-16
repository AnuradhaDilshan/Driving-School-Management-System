# Driving School Management System

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)

This project is a full-stack web application designed to manage the operations of a driving school. It allows administrators, instructors, and students to interact with the system for scheduling, managing lessons, and tracking progress.

## Features

- **User Authentication**: Secure login and registration for administrators, instructors, and students.
- **Student Management**: Add, update, and view student details.
- **Instructor Management**: Manage instructor profiles and schedules.
- **Lesson Scheduling**: Create and manage lesson schedules for students and instructors.
- **Progress Tracking**: Track student progress and lesson completion.
- **Responsive Design**: Fully responsive UI for compatibility across devices.

## File Structure

The project structure is as follows:

```bash
Driving-School-Management-System/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   └── robots.txt
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Layout/
│   │   │   ├── Routes/
│   │   │   └── Spinner.js
│   │   ├── context/
│   │   │   └── auth.js
│   │   ├── pages/
│   │   │   ├── Admin/
│   │   │   ├── Auth/
│   │   │   └── user/
│   │   ├── styles/
│   │   ├── App.cs
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   └── package.json
├── config/
│   └── db.js
├── controllers/
│   ├── appointmentController.js
│   ├── attendenceController.js
│   ├── authController.js
│   └── paymentController.js
├── helpers/
│   └── authHelper.js
├── middlewares/
│   └── authMiddleware.js
├── models/
│   ├── classAttendModel.js
│   ├── courseModel.js
│   ├── drivingTestModel.js
│   ├── examAttendModel.js
│   └── userModel.js
├── routes/
│   ├── authRoute.js
│   ├── datesRoute.js
│   ├── documentRoutes.js
│   ├── paymentRoute.js
│   └── trainingRoute.js
├── .env
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
├── server.js
└── README.md
```

## How to Run the Project

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/AnuradhaDilshan/Driving-School-Management-System.git
   cd Driving-School-Management-System
   ```

2. Set up the backend:

   ```bash
   npm install
   ```

   - Create a `.env` file in the file directory with the following variables:
     ```env
     PORT = 8080
     DEV_MODE = development
     MONGODB_URL = your_mongodb_connection_string
     JWT_SECRET_KEY = your_jwt_secret
     ```

3. Set up the frontend:

   ```bash
   cd client
   npm install
   ```

   - Create a `.env` file in the file directory with the following variables:
     ```env
     REACT_APP_API = http://localhost:8080
     ```

4. Running the Project

- **Nodemon** is installed to automatically restart the backend server whenever file changes are detected. This removes the need to manually stop and restart the server after every update.

- **Concurrently** is used to run both the frontend and backend servers simultaneously with a single command.

- **Custom Npm Scripts** are added to simplify the development workflow:

  ```bash
  "scripts": {
  "start": "node server.js",
  "server": "nodemon server.js",
  "client": "npm start --prefix ./client",
  "dev": "concurrently \"npm run server\" \"npm run client\""
  }
  ```

  Simply run `npm run dev` to launch both the backend and frontend servers in parallel.

- To start the development server, run:

  ```bash
  npm run dev
  ```

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](./LICENSE) file for details.

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
![Last Commit](https://img.shields.io/github/last-commit/AnuradhaDilshan/Medium-To-React-App)
![Repo Size](https://img.shields.io/github/repo-size/AnuradhaDilshan/Medium-To-React-App)
![Top Language](https://img.shields.io/github/languages/top/AnuradhaDilshan/Medium-To-React-App)
