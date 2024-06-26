# Saishiva Blog

A simple blog application using Firebase for authentication and Firestore for the database. Users can sign in anonymously and interact with the blog.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features
- Anonymous authentication using Firebase
- Firestore integration for storing blog posts and user data
- Simple and clean UI

## Installation

### Prerequisites
- Node.js and npm installed on your machine

### Steps
1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/saishiva-blog.git
    cd saishiva-blog
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory and add your Firebase configuration:**
    ```plaintext
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
    ```

4. **Start the development server:**
    ```bash
    npm start
    ```

## Usage
- Open your browser and navigate to `http://localhost:3000`.
- The application will automatically sign in the user anonymously.
- Users can interact with the blog and perform various actions as configured.

## Configuration
The application is configured using environment variables stored in the `.env` file. Ensure you replace the placeholder values with your actual Firebase configuration.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
#   C o d s o f t - T a s k 3  
 