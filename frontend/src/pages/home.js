import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png"; // Replace with your hero image

const features = [
  {
    title: "Instant AI Videos",
    desc: "Turn your script or idea into a stunning video instantly with AI.",
    icon: "⚡",
    gradient: "from-cyan-500 to-purple-500",
  },
  {
    title: "Smart Templates",
    desc: "Pick from AI-powered templates that adapt to your content style.",
    icon: "🎨",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Seamless Editing",
    desc: "Edit your videos effortlessly with AI-assisted smart tools.",
    icon: "🛠️",
    gradient: "from-pink-500 to-cyan-500",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden font-mont">
      
      {/* Background UI: subtle grid & moving shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900 via-purple-900 to-gray-900 opacity-40 animate-gradientSlow"></div>
        <div className="absolute top-10 left-20 w-80 h-80 border-2 border-cyan-500 rounded-full opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-16 w-96 h-96 border-2 border-purple-500 rounded-full opacity-20 animate-spin-slow-reverse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-32 gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient">
            QuickVidAI
          </h1>
          <p className="text-gray-300 mt-6 text-lg md:text-xl max-w-xl">
            Transform your ideas into professional AI-powered videos instantly.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/generate"
              className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-8 py-3 rounded-full font-mont font-semibold shadow-lg hover:scale-105 transform transition-transform"
            >
              Generate Video
            </Link>
            <Link
              to="/contact"
              className="border border-white px-8 py-3 rounded-full font-mont font-semibold hover:bg-white hover:text-gray-900 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="AI Video Demo"
            className="w-96 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12">
        {features.map((f, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-3xl bg-gray-800/80 backdrop-blur-md shadow-lg transform hover:-translate-y-4 hover:scale-105 transition-transform cursor-pointer`}
          >
            <div className={`text-4xl w-14 h-14 flex items-center justify-center mb-4 rounded-full bg-gradient-to-br ${f.gradient}`}>
              {f.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-300">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-gray-800/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-transform border border-cyan-500">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Create Your First AI Video in Seconds
          </h2>
          <p className="text-gray-300 mb-8">
            Jumpstart your creativity with QuickVidAI’s cutting-edge AI video generation platform.
          </p>
          <Link
            to="/generate"
            className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-12 py-4 rounded-full font-mont font-semibold shadow-lg hover:scale-105 transform transition-transform"
          >
            Start Creating
          </Link>
        </div>
      </section>

      {/* Animations */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0,0) scale(1); }
            33% { transform: translate(30px,-50px) scale(1.1); }
            66% { transform: translate(-20px,20px) scale(0.9); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animate-gradient { background-size: 200% 200%; animation: gradient 6s ease infinite; }
          @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
          .animate-gradientSlow { animation: gradient 30s linear infinite; }
          .animate-spin-slow { animation: spin 60s linear infinite; }
          .animate-spin-slow-reverse { animation: spin 60s linear infinite reverse; }
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}
      </style>
    </div>
  );
};

export default Home;
