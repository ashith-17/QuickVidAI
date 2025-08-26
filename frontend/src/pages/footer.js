import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-6 mt-12">
      <div className="max-w-6xl mx-auto text-center text-gray-400">
        <p>© {new Date().getFullYear()} QuickVidAI. All rights reserved.</p>
        <p className="mt-2">
          Built with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
