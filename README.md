# Saishiva Blog

A modern, responsive blogging application built with React, Firebase, and Tailwind CSS. This application allows users to read blogs,create the blogs,manage their profiles, and securely authenticate using email and password.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure Sign Up and Login functionality using Firebase Authentication (Email/Password).
- **Blog Management**: Browse a list of blogs and view detailed blog posts and create the blogs.
- **User Profiles**: Manage user profile information in a protected route.
- **Responsive Design**: Built with Tailwind CSS for a seamless experience across devices (Mobile, Tablet, Desktop).
- **Protected Routes**: Ensures sensitive pages like the User Profile are only accessible to authenticated users.
- **Static Pages**: Includes About Us, Contact, Privacy Policy, Terms & Conditions, Disclaimer, and Cookie Policy.
- **Real-time Database**: Uses Firebase Firestore for data storage.

## Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Backend/Database**: Firebase (Authentication, Firestore)
- **Icons**: React Icons, FontAwesome

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

### Steps

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/THATIPALLISAISHIVA/Codsoft-Task3.git
    cd Codsoft-Task3
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**

    Create a `.env` file in the root directory of the project. Add your Firebase configuration keys as follows:

    ```plaintext
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
    ```

    > **Note:** You can obtain these values from your Firebase Console under Project Settings.

4.  **Start the development server:**

    ```bash
    npm start
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Configuration

The application relies on a `.env` file for Firebase connection details. Ensure this file is present and correctly populated before running the application.

## Project Structure

```
src/
├── assets/             # Static assets (images, etc.)
├── components/         # Reusable React components
│   ├── About.jsx       # About Us page
│   ├── BlogCard.jsx    # Component to display valid blog summaries
│   ├── BlogDetails.jsx # Detailed view of a single blog post
│   ├── Contact.jsx     # Contact form page
│   ├── Home.jsx        # Landing page
│   ├── Navbar.jsx      # Navigation bar
│   ├── Profile.jsx     # User profile page
│   ├── SignUpForm.jsx  # Authentication forms (Login/Signup)
│   └── ...             # Other static pages (Privacy, Terms, etc.)
├── context/
│   └── AuthContext.js  # Context provider for authentication state
├── firebase.jsx        # Firebase initialization and configuration
├── App.js              # Main application component with Routing
├── App.css             # Main stylesheet
└── index.js            # Entry point
```
