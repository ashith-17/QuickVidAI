import React, { useState } from "react";

function VideoGenerator() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [videoUrl, setVideoUrl] = useState("");

  const handleGenerate = async () => {
    const response = await fetch("http://127.0.0.1:8000/generate-video", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, color }),
    });

    if (response.ok) {
      const blob = await response.blob();
      setVideoUrl(URL.createObjectURL(blob));
    } else {
      alert("Error generating video");
    }
  };

  return (
    <div className="p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">QuickVid AI</h1>

      <textarea
        className="border p-2 rounded-md w-full"
        rows="4"
        placeholder="Enter text for your video..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div>
        <label className="mr-2 font-medium">Text Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Generate Video
      </button>

      {videoUrl && (
        <div className="mt-4">
          <h2 className="font-semibold">Generated Video:</h2>
          <video src={videoUrl} controls autoPlay loop className="mt-2 w-full" />
        </div>
      )}
    </div>
  );
}

export default VideoGenerator;