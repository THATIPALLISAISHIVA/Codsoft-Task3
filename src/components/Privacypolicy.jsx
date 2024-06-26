import React from 'react';
import './fontfamily.css'

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-white heading">Privacy Policy</h1>
      <p className="mb-4 text-white text-xl">
        Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information when you visit our blog.
      </p>
      <h2 className="text-2xl font-bold mb-2 text-white heading">Information We Collect</h2>
      <p className="mb-4 text-white text-xl">
        We may collect personal information such as your name, email address, and other contact details when you subscribe to our newsletter or contact us.
      </p>
      <h2 className="text-2xl font-bold mb-2 text-white heading">How We Use Your Information</h2>
      <p className="mb-4 text-white text-xl">
        We use your information to respond to your inquiries, send you updates, and improve our blog. We do not share your personal information with third parties without your consent.
      </p>
      <h2 className="text-2xl font-bold mb-2 text-white heading">Your Rights</h2>
      <p className="mb-4 text-white text-xl">
        You have the right to access, update, and delete your personal information. If you have any questions about our privacy practices, please contact us.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
