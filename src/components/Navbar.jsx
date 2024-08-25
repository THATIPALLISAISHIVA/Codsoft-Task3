import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaSignOutAlt, FaBlog, FaUserPlus, FaSignInAlt } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';

const Navbar = () => {
  const { currentUser } = useAuth();

  const signOut = async () => {
    try {
      sessionStorage.removeItem('user');
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-around items-center">
          <li className="sm:hidden md:inline">
            <Link to="/" className="text-white md:flex items-center hidden">
              <FaBlog className="mr-2" />
              SaishivaBlog
            </Link>
          </li>
          <li className="md:flex items-center">
            <Link to="/" className="text-white flex items-center ml-4">
              <FaHome className="mr-2 hidden md:inline" />
              Home
            </Link>
          </li>
          {currentUser ? (
            <>
              <li className="md:flex items-center">
                <Link to="/profile" className="text-white flex items-center ml-4">
                  <FaUser className="mr-2 hidden md:inline" />
                  Profile
                </Link>
              </li>
              <li className="md:flex items-center">
                <Link to="/contact" className="text-white flex items-center ml-4">
                  <FaEnvelope className="mr-2 hidden md:inline" />
                  Contact
                </Link>
              </li>
              <li className="flex items-center ml-4">
                <button onClick={signOut} className="text-white flex items-center">
                  <FaSignOutAlt className="mr-2 hidden md:inline" />
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="md:flex items-center">
                <Link to="/loginandsignup" className="text-white flex items-center ml-4">
                  <FaUserPlus className="mr-2" />
                  Sign Up
                </Link>
              </li>
              <li className="md:flex items-center">
                <Link to="/loginandsignup" className="text-white flex items-center ml-4">
                  <FaSignInAlt className="mr-2" />
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
