import React from 'react';
import './fontfamily.css'

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-white heading">Terms and Conditions</h1>
      <p className="mb-4 text-white text-xl">
        By accessing and using our blog, you agree to comply with the following terms and conditions. If you do not agree with any part of these terms, please do not use our blog.
      </p>
      <h2 className="text-2xl font-bold mb-2 text-white heading">Use of Content</h2>
      <p className="mb-4 text-white text-xl">
        All content on our blog is for informational purposes only. You may not reproduce, distribute, or modify any content without our prior written consent.
      </p> 

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-white heading">2. User Conduct</h2>
        <p className='text-white text-xl mb-3'>You agree to use our blog in a lawful and respectful manner. You must not post any content that is offensive, defamatory, or violates any laws. Specifically, you agree not to post or share content that:</p>
        <ul className="list-disc list-inside mb-4 text-white ">
          <li>Is pornographic or sexually explicit.</li>
          <li>Promotes violence or hatred against individuals or groups based on race, ethnicity, religion, disability, gender, age, nationality, veteran status, sexual orientation, or gender identity.</li>
          <li>Is defamatory, libelous, or slanderous.</li>
          <li>Infringes on any intellectual property rights, including but not limited to copyrights, trademarks, or trade secrets.</li>
          <li>Contains any form of malware, viruses, or other harmful code.</li>
          <li>Violates any applicable local, state, national, or international laws.</li>
          <li>Promotes illegal activities or conduct that is abusive, threatening, obscene, or otherwise objectionable.</li>
          <li>Impersonates any person or entity or otherwise misrepresents your affiliation with a person or entity.</li>
        </ul>
        <p className='text-white text-xl'>If you violate these terms, we reserve the right to remove your content and terminate your access to the blog without notice.</p>
      </section>

      <h2 className="text-2xl font-bold mb-2 text-white heading">Limitation of Liability</h2>
      <p className="mb-4 text-white text-xl">
        We are not liable for any damages or losses arising from your use of our blog. Our content is provided "as is" without any warranties.
      </p>
    </div>
  );
};

export default TermsAndConditions;
