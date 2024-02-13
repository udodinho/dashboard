import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <div className="mt-20 mb-32">
    <p className="dark:text-gray-200 text-lg text-gray-700 text-center m-20">
      © {currentYear}, All rights reserved by Shoppefy.com
    </p>
  </div>
);

export default Footer;