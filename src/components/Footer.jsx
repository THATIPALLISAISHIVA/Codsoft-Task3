import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './fontfamily.css'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>
              Welcome to our blog! We are passionate about sharing insightful and informative content on various topics. Stay tuned for regular updates and feel free to reach out to us with any questions or feedback.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><Link to="/about" className="hover:underline">About Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li className="mb-2"><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li className="mb-2"><Link to="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-5">
            <a href="www.linkedin.com/in/saishivathatipalli" className="text-2xl hover:text-gray-400"><FaLinkedinIn /></a>
            <a href="https://github.com/THATIPALLISAISHIVA" className="text-2xl hover:text-gray-400"><FaGithub /></a>
              <a href="https://facebook.com" className="text-2xl hover:text-gray-400"><FaFacebookF /></a>
              <a href="https://instagram.com" className="text-2xl hover:text-gray-400"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} BlogPost. All rights reserved.</p>
          <p>
            <Link to="/disclaimer" className="hover:underline">Disclaimer</Link> | <Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
