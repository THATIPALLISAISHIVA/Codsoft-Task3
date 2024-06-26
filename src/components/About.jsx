import React from 'react';
import './fontfamily.css'
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-4 heading">About Us</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 heading">Who We Are</h2>
        <p className='text-xl'>Welcome to [Your Blog Name], your go-to source for insightful articles and information on a variety of topics that matter most to engineering students and enthusiasts. Our mission is to provide high-quality, well-researched content that educates, informs, and inspires our readers.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 heading">Our Content</h2>
        <p className='text-xl'>At <span className='font-semibold '>SaishivaBlog</span>, we cover a wide range of topics including:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Technology: Stay up-to-date with the latest trends, innovations, and breakthroughs in the tech world.</li>
          <li>Health: Discover tips and advice on maintaining a healthy lifestyle, mental wellness, and balancing work and life.</li>
          <li>Stories: Read inspiring stories and interviews with professionals, students, and industry leaders.</li>
          <li>Engineering: Get insights into different engineering fields, study tips, and career guidance to help you succeed in your academic and professional journey.</li>
          <li>Programming: Explore tutorials, coding challenges, and best practices for various programming languages and development frameworks.</li>
          <li>Science: Dive into articles that explore fascinating scientific discoveries and concepts.</li>
          <li>Education: Learn about new educational resources, online courses, and study techniques.</li>
          <li>Career Development: Find advice on resume building, interview preparation, and navigating the job market.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 heading">Our Team</h2>
        <p className='text-xl'>Our team is composed of passionate writers, researchers, and professionals from various fields who are dedicated to bringing you the best content possible. We believe in the power of knowledge and strive to create a community where everyone can learn and grow together.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 heading">Join Us</h2>
        <p className='text-xl'>We are always looking for new contributors who share our passion for knowledge and writing. If you are interested in writing for us, please <Link to="/contact" className="text-blue-500">contact us</Link> for more information.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 heading">Contact Us</h2>
        <p className='text-xl'>If you have any questions, suggestions, or just want to say hi, feel free to <Link to="/contact" className="text-blue-500">reach out to us</Link>. We love hearing from our readers!</p>
      </section>
    </div>
  );
};

export default AboutUs;
