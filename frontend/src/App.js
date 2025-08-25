import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Generate from "./pages/generate";
import Contact from "./pages/contact";
import Footer from "./pages/footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        {/* Navbar */}
        <nav className="w-full bg-gray-800 border-b border-gray-700">
          <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-2xl font-bold text-blue-400">QuickVidAI</h1>
            <div className="space-x-6">
              <Link to="/" className="hover:text-blue-400">Home</Link>
              <Link to="/generate" className="hover:text-blue-400">Generate</Link>
              <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Page content */}
        <main className="flex-grow max-w-5xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generate" element={<Generate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
