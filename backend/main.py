from fastapi import FastAPI, File, UploadFile, Form
from fastapi.responses import FileResponse
from pathlib import Path
import pyttsx3
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont
import wave
import contextlib
import ffmpeg
import os
import uuid
import subprocess
from fastapi import FastAPI, UploadFile, Form
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI app
app = FastAPI()

# Allow frontend to access API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change "*" to your frontend URL for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ensure output directory exists
OUTPUT_DIR = "generated_videos"
os.makedirs(OUTPUT_DIR, exist_ok=True)

@app.post("/generate-video/")
async def generate_video(
    text: str = Form(...),
    color: str = Form("white"),
    font_size: int = Form(48),
    background_color: str = Form("black")
):
    """
    Generate a video with text overlay using FFmpeg.
    """
    try:
        # Unique filename
        output_filename = f"{uuid.uuid4()}.mp4"
        output_path = os.path.join(OUTPUT_DIR, output_filename)

        # FFmpeg command to create video with text overlay
        # Using lavfi (filter) to generate background color video
        command = [
            "ffmpeg",
            "-f", "lavfi",
            "-i", f"color=c={background_color}:s=1280x720:d=5",  # 5 sec video
            "-vf", f"drawtext=text='{text}':fontcolor={color}:fontsize={font_size}:x=(w-text_w)/2:y=(h-text_h)/2",
            "-c:v", "libx264",
            "-t", "5",
            "-y",
            output_path
        ]

        # Run ffmpeg command
        subprocess.run(command, check=True)

        return {"message": "Video generated successfully", "video_url": f"/download/{output_filename}"}

    except subprocess.CalledProcessError as e:
        return {"error": f"FFmpeg failed: {e}"}
    except Exception as e:
        return {"error": str(e)}

@app.get("/download/{filename}")
async def download_video(filename: str):
    """
    Endpoint to download generated video.
    """
    file_path = os.path.join(OUTPUT_DIR, filename)
    if os.path.exists(file_path):
        return FileResponse(file_path, media_type="video/mp4", filename=filename)
    return {"error": "File not found"}
