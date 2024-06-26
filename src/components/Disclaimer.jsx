import React from 'react';
import './fontfamily.css'

const Disclaimer = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-white heading">Disclaimer</h1>
      <p className="mb-4 text-white text-xl">
        The information provided on our blog is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the blog or the information, products, services, or related graphics contained on the blog for any purpose.
      </p>
      <p className="mb-4 text-white text-xl">
        Any reliance you place on such information is therefore strictly at your own risk. We will not be liable for any loss or damage arising from your use of this blog.
      </p>
    </div>
  );
};

export default Disclaimer;
