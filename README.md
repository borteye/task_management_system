# Task Management System

This is a Task Management System built with React, TypeScript, Express.js, and PostgreSQL. The frontend is built with React and TypeScript, and the backend is built with Express.js and Typescript. The project also includes a PostgreSQL database.

## Table of Contents

- [Features](#features)
- Prerequisites
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure]


## Features

- Create, read, update, and delete tasks
- User authentication and authorization
- Task prioritization and categorization
- Responsive design

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine
- PostgreSQL installed and running


## Installation

### Backend (Express.js)

1. Clone the repository:
    ```sh
    git clone https://github.com/borteye/task_management_system_backend.git
    cd task_management_system_backend
    ```


3. Install dependencies:
    ```sh
    npm install
    ```

4. Create a `.env` file in the `backend` directory and add the following environment variables:
    ```env
    PORT=5000
    ACCESS_TOKEN_SECRET= your access token secret key
    PASSWORD_RESET_TOKEN_SECRET= your access token secret key
    MAILER_USERNAME = your mailer username/email address for NODEMAILER
    MAILER_PASSWORD = your mailer password	

    ```

5. CORS  `http://localhost:3000 ` 
    ```

6. Run the migrations to set up the database:

## Database Setup ### Create Database ```sql 

CREATE DATABASE task_management_system;

CREATE TABLE user (
  userid SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
    
CREATE TABLE verification_code (
  code_id SERIAL PRIMARY KEY,
  code VARCHAR(10) NOT NULL,
  user_email VARCHAR(100) NOT NULL,
);

CREATE TABLE tasks (
  task_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  user_id INT NOT NULL,
  assigned_to VARCHAR(100),
  stage VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  priority_level VARCHAR(50),
  due_date VARCHAR(50),
  assigned_by VARCHAR(100),
  description TEXT,
);


### Frontend (React)
1. Clone the repository:
    ```sh
    git clone https://github.com/borteye/task_management_system.git
    cd task_management_system
    ```


2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env.local` file in the `frontend` directory and add the following environment variable:
    ```env
    REACT_APP_ BASE_URL=http://localhost:5000
	
REACT_APP_SIGN_IN=auth/signIn
REACT_APP_SIGN_UP=auth/signUp
REACT_APP_FORGOT_PASSWORD=auth/forgot-password
REACT_APP_EMAIL_VERIFICATION=auth/email-verification
REACT_APP_RESET_PASSWORD=auth/reset-password
REACT_APP_RESEND_VERIFICATION_CODE=auth/resend-verification-code
REACT_APP_GET_USER=auth/get-users
REACT_APP_TASKS_URL=tasks/my-task
REACT_APP_ADD_TASK=tasks/add-task
REACT_APP_MARK_AS_COMPLETED=tasks/mark-as-completed
REACT_APP_DELETE_TASK=tasks/delete-task
REACT_APP_EDIT_TASK=tasks/edit-task




## Running the Application

### Backend

1. Start the backend server:
    ```sh
    npm start
    ```

### Frontend

1. Start the frontend development server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

### Project Structure

    ```sh
    npm start
    ```
/src
  /app
    /controllers
      auths.ts
      task.ts
    /queries
      auths.ts
      task.ts
    /routers
      auths.ts
      task.ts
  /config
    constants.ts
    database.ts
  /helpers
    bcryptHelper.ts
    mailer.ts
  /middlewares
    JWTAuthenticator.ts
  /types
    Auth.d.ts
    User.d.ts
  /utils
    MailMessage.ts
    TokenGenerator.ts
    verificationCodeGenerator.ts
  /validators
    authSchemas.ts
    formSchema.ts
  server.ts
.gitignore
package-lock.json
package.json
tsconfig.json



### Explanation

- **/src**: Main source directory.
  - **/app**: Contains the core application logic.
    - **/controllers**: Handles incoming requests and returns responses.
    - **/queries**: Contains database query logic.
    - **/routers**: Defines application routes.
  - **/config**: Configuration files.
  - **/helpers**: Utility functions and helpers.
  - **/middlewares**: Middleware functions for request handling.
  - **/types**: TypeScript type definitions.
  - **/utils**: Utility classes and functions.
  - **/validators**: Validation schemas.
- **server.ts**: Entry point of the application.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **package-lock.json**: Auto-generated file that locks the versions of a project’s dependencies.
- **package.json**: Contains project metadata and dependencies.
- **tsconfig.json**: TypeScript configuration file.


