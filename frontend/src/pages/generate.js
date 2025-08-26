import React from "react";

const Generate = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <h2 className="text-3xl font-bold text-blue-400">Generate Your Video</h2>
      <p className="text-gray-300 max-w-2xl text-center">
        Upload your content or input prompts, and let AI create stunning videos automatically.
      </p>
      <div className="flex flex-col space-y-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter your video prompt"
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400"
        />
        <button className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
          Generate Video
        </button>
      </div>
    </div>
  );
};

export default Generate;
