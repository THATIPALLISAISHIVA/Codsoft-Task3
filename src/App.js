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
import Footer from './components/Footer';
import AboutUs from './components/About';
import PrivacyPolicy from './components/Privacypolicy';
import TermsAndConditions from './components/Terms';
import Disclaimer from './components/Disclaimer';
import CookiePolicy from './components/Cookie';

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
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <Footer/>
      </Router>
    </AuthProvider>
  );
}

export default App;
