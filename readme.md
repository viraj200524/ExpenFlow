# ExpenFlow

## Overview

ExpenFlow is an advanced expense management solution designed to streamline and automate the process of handling receipts, invoices, and expense reports. Leveraging cutting-edge AI and machine learning technologies, ExpenFlow offers a seamless experience for both employees and administrators, ensuring accuracy, compliance, and efficiency in expense management.

## Table of Contents

1. [Overview](#overview)
2. [Objectives](#objectives)
3. [Features](#features)
4. [Screenshots](#screenshots)
5. [Tech Stack](#tech-stack)
6. [Project Structure](#project-structure)
7. [Getting Started](#getting-started)
8. [Contributors](#contributors)

## Objectives

- Automate the process of expense management.
- Enhance accuracy and compliance in handling receipts and invoices.
- Provide real-time analytics and insights.
- Ensure secure and efficient user authentication and authorization.

## Features

- **Smart Receipt Processing**: AI-powered OCR technology automatically extracts and organizes receipt data with high accuracy.
- **Fraud Detection**: Advanced anomaly detection algorithms identify suspicious patterns and duplicate submissions.
- **Interactive Analytics**: Real-time dashboards and insights to track spending patterns across departments.
- **Automated Compliance**: Policy violation checks and automated flagging ensure adherence to company guidelines.
- **User Authentication and Authorization**: Secure login and access control using Auth0.

## Screenshots

![landing_page](https://github.com/user-attachments/assets/b875d327-d8f0-41cb-8569-13abaac6036f)
![user_dashboard](https://github.com/user-attachments/assets/7e2227c4-8966-4d71-a543-ef1a2af61c88)
![admin_dashboard](https://github.com/user-attachments/assets/45ba1436-fb29-450a-8ef1-36efadb6711b)
![receipt_upload](https://github.com/user-attachments/assets/9178004f-8574-4958-a7d2-3ea85214079f)

## Tech Stack

| Category                     | Technologies                                                                 |
|------------------------------|------------------------------------------------------------------------------|
| **Programming Languages**    | ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| **Frameworks**               | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node-dot-js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) |
| **Libraries**                | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| **Tools**                    | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) |

## Project Structure

```
Directory structure:
└── expenflow/
    ├── backend/
    │   ├── ChatBotServer.js
    │   ├── FraudDetection.py
    │   ├── Invoice_backend.py
    │   ├── ReportGeneration.py
    │   ├── app.py
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── server.js
    │   ├── .env
    │   ├── .gitignore
    │   ├── models/
    │   │   └── invoice.js
    │   ├── routes/
    │   │   ├── companyInvoices.js
    │   │   ├── invoices.js
    │   │   └── userInvoices.js
    |   |
    └── frontend/
        ├── README.md
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.js
        ├── tailwind.config.js
        ├── .env
        ├── .gitignore
        ├── public/
        │   ├── index.html
        │   ├── manifest.json
        │   └── robots.txt
        └── src/
            ├── App.css
            ├── App.js
            ├── App.test.js
            ├── fonts.css
            ├── index.css
            ├── index.js
            ├── reportWebVitals.js
            ├── setupTests.js
            ├── assets/
            │   └── fonts/
            │       ├── mario.js
            │       ├── mario.ttf
            │       └── mario2.js
            ├── components/
            │   ├── Chatbot.js
            │   ├── Dummy.js
            │   ├── GameBoy.js
            │   ├── GameCard.js
            │   ├── Landing.js
            │   ├── Navbar.js
            │   ├── UserDashboard.js
            │   ├── UserUpload.js
            │   ├── dummydata.js
            │   ├── emp_dashboard.js
            │   ├── org_dashboard.js
            │   ├── test.js
            │   ├── test2.js
            │   ├── LogInButton/
            │   │   └── LoginButton.js
            │   └── LogOutButton/
            │       └── LogoutButton.js
            ├── hooks/
            │   ├── useFetchUserInvoices.js
            │   ├── useGameControls.js
            │   └── useInvoicesByCompany.js
            └── services/
                └── api.js

```

## Getting Started

### Cloning the Repository

```sh
git clone https://github.com/your-repo/ExpenFlow.git
cd project-name
```

### Running the Backend

1. Navigate to the backend directory:
    ```sh
    cd backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Run the backend server:
    ```sh
    npm start
    ```

### Running the Frontend

1. Navigate to the frontend directory:
    ```sh
    cd frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Run the frontend server:
    ```sh
    npm start
    ```

## Contributors

- **Kavya Rambhia** - [GitHub Profile](https://github.com/kavya-r30)
- **Dhruv Panchal** - [GitHub Profile](https://github.com/dhruvp18)
- **Viraj Vora** - [GitHub Profile](https://github.com/viraj200524)
- **Chaitra Samant** - [GitHub Profile](https://github.com/chaitra-samant)
