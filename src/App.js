// src/App.js
import React from 'react';
import SignUpForm from "./components/SignUpForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Blogs from "./components/BlogCard";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import BlogDetails from "./components/BlogDetails"; // Import BlogDetails component
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} /> {/* Add route for blog details */}
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginandsignup" element={<SignUpForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
