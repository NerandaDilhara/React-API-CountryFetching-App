import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          🌍 Developed using React & REST Countries API
        </p>
        <p className="text-xs mt-2">
          &copy; {new Date().getFullYear()} All rights reserved. | <span className="font-medium text-blue-600 dark:text-blue-400">React Countries Explorer</span>
        </p>

        <p className="text-xs mt-2">
            &copy; Developed by NerandaDilhara
        </p>
      </div>
    </footer>
  );
};

export default Footer;
