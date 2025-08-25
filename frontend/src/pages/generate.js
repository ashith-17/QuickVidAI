import React, { useState } from "react";
import axios from "axios";

export default function Generate() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [fontSize, setFontSize] = useState(20);
  const [color, setColor] = useState("#FFFFFF");
  const [xPos, setXPos] = useState(20);
  const [yPos, setYPos] = useState(20);
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleGenerate = async () => {
    if (!text || !image) return alert("Provide text and image.");

    const formData = new FormData();
    formData.append("text", text);
    formData.append("image", image);
    formData.append("font_size", fontSize);
    formData.append("color", color);
    formData.append("x_pos", xPos);
    formData.append("y_pos", yPos);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:8000/generate",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setVideoUrl(
        `http://127.0.0.1:8000/download/${response.data.video_path
          .split("/")
          .pop()}`
      );
    } catch {
      alert("Video generation failed. Backend not connected.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center">Generate Video</h2>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 rounded bg-gray-700 border border-gray-600"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full text-gray-200"
      />
      <div className="flex gap-2">
        <input
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          placeholder="Font Size"
          className="w-1/2 p-2 rounded bg-gray-700 border border-gray-600"
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-1/2 h-10 p-2 rounded"
        />
      </div>
      <div className="flex gap-2">
        <input
          type="number"
          value={xPos}
          onChange={(e) => setXPos(e.target.value)}
          placeholder="X Position"
          className="w-1/2 p-2 rounded bg-gray-700 border border-gray-600"
        />
        <input
          type="number"
          value={yPos}
          onChange={(e) => setYPos(e.target.value)}
          placeholder="Y Position"
          className="w-1/2 p-2 rounded bg-gray-700 border border-gray-600"
        />
      </div>
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Video"}
      </button>

      {videoUrl && (
        <div className="text-center mt-4">
          <h3 className="text-xl font-semibold mb-2">Preview</h3>
          <video src={videoUrl} controls className="w-full rounded" />
          <a
            href={videoUrl}
            download="video.mp4"
            className="block mt-2 text-blue-400 hover:underline"
          >
            Download Video
          </a>
        </div>
      )}
    </div>
  );
}
