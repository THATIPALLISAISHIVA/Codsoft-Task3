import React from 'react';
import './fontfamily.css'

const CookiePolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-4 heading">Cookie Policy</h1>
      <p className="mb-4 text-xl">
        Our blog uses cookies to enhance your browsing experience. By using our blog, you consent to the use of cookies in accordance with this policy.
      </p>
      <h2 className="text-2xl font-bold mb-2 heading">What Are Cookies?</h2>
      <p className="mb-4 text-xl">
        Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences and improve your user experience.
      </p>
      <h2 className="text-2xl font-bold mb-2 heading">How We Use Cookies</h2>
      <p className="mb-4 text-xl">
        We use cookies to analyze traffic, personalize content, and provide social media features. You can control the use of cookies through your browser settings.
      </p>
      <h2 className="text-2xl font-bold mb-2 heading">Managing Cookies</h2>
      <p className="mb-4 text-xl">
        You can manage cookies by adjusting your browser settings to refuse or delete cookies. However, please note that some features of our blog may not function properly if you disable cookies.
      </p>
    </div>
  );
};

export default CookiePolicy;
