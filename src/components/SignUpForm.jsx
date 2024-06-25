import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './form.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [activeTab, setActiveTab] = useState('signup');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      // Redirect to a different page or show a message
      navigate('/'); // Change this to your desired route
      setSuccessMessage('You are already logged in!');
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setError(null); // Reset error when changing tabs
    setSuccessMessage(null); // Reset success message when changing tabs
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/g;
    return password.length >= minLength && specialCharPattern.test(password);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!validatePassword(formData.password)) {
      setError('Password must be at least 8 characters long and contain at least one special character.');
      return;
    }
    setLoading(true);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        console.log('Signed up:', userCredential.user);
        sessionStorage.setItem('user', JSON.stringify(userCredential.user));
        setLoading(false);
        setError(null);
        setSuccessMessage('Signed up successfully!');
        navigate('/'); // Redirect after sign up
      })
      .catch((error) => {
        setLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          setError('Email is already in use.');
        } else {
          setError("Please wait for some time, the server is busy.");
        }
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        console.log('Logged in:', userCredential.user);
        sessionStorage.setItem('user', JSON.stringify(userCredential.user));
        setLoading(false);
        setError(null);
        setSuccessMessage('Logged in successfully!');
        navigate('/'); 
      })
      .catch((error) => {
        setLoading(false);
        if (error.code === 'auth/user-not-found') {
          setError('No user found with this email.');
        } else if (error.code === 'auth/wrong-password') {
          setError('Incorrect password.');
        } else {
          setError('Please enter the proper login credentials or try again later.');
        }
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-gray-800 p-10 max-w-lg mx-auto my-10 rounded shadow-lg relative">
      {loading && <div className="loading-overlay">Loading...</div>}
      <ul className="flex justify-around mb-8">
        <li
          className={`cursor-pointer p-4 ${activeTab === 'signup' ? 'bg-teal-500 text-white' : 'bg-gray-300 text-gray-600'}`}
          onClick={() => handleTabClick('signup')}
        >
          Sign Up
        </li>
        <li
          className={`cursor-pointer p-4 ${activeTab === 'login' ? 'bg-teal-500 text-white' : 'bg-gray-300 text-gray-600'}`}
          onClick={() => handleTabClick('login')}
        >
          Log In
        </li>
      </ul>

      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      {activeTab === 'signup' && (
        <div id="signup">
          <h1 className="text-3xl text-center text-white mb-8">Sign Up for Free</h1>
          <form onSubmit={handleSignUp}>
            <div className="flex mb-6">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-300 mb-2">
                  First Name<span className="text-teal-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  maxLength="20"
                  autoComplete="off"
                  className="w-full p-2 bg-gray-700 text-white rounded"
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-gray-300 mb-2">
                  Last Name<span className="text-teal-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  maxLength="20"
                  autoComplete="off"
                  className="w-full p-2 bg-gray-700 text-white rounded"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">
                Email Address<span className="text-teal-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                autoComplete="off"
                className="w-full p-2 bg-gray-700 text-white rounded"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-gray-300 mb-2">
                Set A Password<span className="text-teal-500">*</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                autoComplete="off"
                className="w-full p-2 bg-gray-700 text-white rounded"
                onChange={handleInputChange}
              />
              <span className="absolute top-[2.80rem] right-3 cursor-pointer text-gray-400" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button type="submit" className="w-full py-3 bg-teal-500 text-white rounded hover:bg-teal-600">
              Get Started
            </button>
          </form>
          <p className="text-center text-gray-400 mt-4">
            Already have an account? <span className="text-teal-500 cursor-pointer" onClick={() => handleTabClick('login')}>Log In</span>
          </p>
        </div>
      )}

      {activeTab === 'login' && (
        <div id="login">
          <h1 className="text-3xl text-center text-white mb-8">Welcome Back!</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">
                Email Address<span className="text-teal-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                autoComplete="off"
                className="w-full p-2 bg-gray-700 text-white rounded"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-gray-300 mb-2">
                Password<span className="text-teal-500">*</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                autoComplete="off"
                className="w-full p-2 bg-gray-700 text-white rounded"
                onChange={handleInputChange}
              />
              <span className="absolute top-[2.80rem] right-3 cursor-pointer text-gray-400" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <p className="text-right text-gray-400 mb-6"><a href="/">Forgot Password?</a></p>
            <button type="submit" className="w-full py-3 bg-teal-500 text-white rounded hover:bg-teal-600">
              Log In
            </button>
          </form>
          <p className="text-center text-gray-400 mt-4">
            Don't have an account? <span className="text-teal-500 cursor-pointer" onClick={() => handleTabClick('signup')}>Sign Up</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;
