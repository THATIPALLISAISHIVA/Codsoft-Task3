import React from 'react';

const Alert = ({ message, type, onClose }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'info':
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div className={`fixed top-14 left-0 w-full ${getBackgroundColor()} text-white py-4 px-8 shadow-lg z-50 flex items-center justify-between transition-transform transform duration-300 ease-in-out`}>
      <span className="font-bold text-lg">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 bg-white text-black rounded-full h-8 w-8 flex items-center justify-center focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
};

export default Alert;
