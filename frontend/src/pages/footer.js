import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 border-t border-gray-700 mt-6 py-4 text-center text-gray-400">
      &copy; {new Date().getFullYear()} QuickVidAI. All rights reserved.
    </footer>
  );
}
