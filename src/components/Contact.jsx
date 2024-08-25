import React, { useState } from 'react';
import leftbg from '../assets/form.png';
import Alert from './Alert';

// Assuming you have imported the necessary icon components or SVGs
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlertMessage('Sending...');
    setAlertType('info');
    setShowAlert(true);

    const formData = new FormData();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('email', email);
    formData.append('phone_number', phoneNumber);
    formData.append('message', message);
    formData.append('access_key', 'eb2593de-5607-4d43-9ac4-308b1c9c139e');
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setAlertMessage('Form Submitted Successfully');
      setAlertType('success');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
    } else {
      console.log('Error', data);
      setAlertMessage(data.message);
      setAlertType('error');
    }

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#111827] text-white font-sans flex flex-col-reverse mt-10  lg:flex-row gap-8 p-8 relative justify-end lg:items-stretch items-center">
      {showAlert && <Alert message={alertMessage} type={alertType} onClose={() => setShowAlert(false)} />}
      <div className="w-full lg:w-1/2 bg-black p-8 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${leftbg})` }}>
        <div className="flex flex-col gap-4 bg-black bg-opacity-50 p-8 rounded-lg">
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-bold text-lg flex items-center">
              <MdLocationOn className="mr-2" /> Address
            </h3>
            <p className="text-white flex items-center">
               RGUKT-BASAR
            </p>
            <p className="text-white flex items-center">
               Nirmal, 504105
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-bold text-lg flex items-center">
               Let's Talk
            </h3>
            <p className="text-white flex items-center">
              <MdPhone className="mr-2" /> +91 9542254604
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-bold text-lg flex items-center">
              General Support
            </h3>
            <p className="text-white flex items-center">
              <MdEmail className="mr-2" /> saishivathatipalli@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-gray-200 p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-6 text-black">Send Us A Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="firstName" className=" font-medium text-black">
              Tell us your name *
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 text-black"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 text-black"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="email" className=" font-medium text-black">
              Enter your email *
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 text-black"
              placeholder="Eg. example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="phoneNumber" className=" font-medium text-black">
              Enter phone number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 text-black"
              placeholder="Eg. +91 0000000000"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="message" className=" font-medium text-black">
              Message *
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 resize-none text-black"
              placeholder="Write us a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
