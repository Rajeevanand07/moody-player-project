import React, { useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { toast } from "react-toastify";
import axios from "axios";

export default function FacialExpression({setSongs}) {
  const videoRef = useRef();
  const [cameraOpen, setCameraOpen] = useState(false);

  const loadModels = async () => {
    const MODEL_URL = "/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        setCameraOpen(true);
      })
      .catch((err) => console.error("Error accessing webcam: ", err));
  };

  const handleVideoPlay = async () => {
    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();
    const expression = detections[0]?.expressions;
    if (expression) {
      const maxValue = Math.max(...Object.values(expression));
      const emotion = Object.keys(expression).find(
        (key) => expression[key] === maxValue
      );
      toast.success(`${emotion} face detected`);
      const { data } = await axios.get(
        `https://moody-player-project.onrender.com/songs?mood=${emotion}`
      );
      setSongs(data.songs);
    }
  };

  const handleCloseCamera = () => {
    const video = videoRef.current;
    if (video && video.srcObject) {
      const stream = video.srcObject;
      const tracks = stream.getTracks ? stream.getTracks() : [];
      tracks.forEach((t) => t.stop());
      video.srcObject = null;
    }
    setCameraOpen(false);
  };

  const handleOpenCamera = async () => {
    await loadModels();
    startVideo();
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 lg:px-6">
        <div className="w-[20rem] h-[16rem] sm:w-[25rem] sm:h-[15rem] md:w-[30rem] md:h-[20rem] rounded-xl overflow-hidden relative flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            muted
            className="w-full h-full object-cover"
            style={{ display: cameraOpen ? "block" : "none" }}
          />
          {!cameraOpen && (
            <img
              src="https://media.istockphoto.com/id/1422753746/photo/sustainability-circle.webp?a=1&b=1&s=612x612&w=0&k=20&c=f4xdlvprDFNmRTaCztx08Ou6Td9FpSTZZ1J6SECCTdU="
              alt="face overlay"
              className="absolute inset-0 m-auto opacity-80"
            />
          )}
        </div>
        {!cameraOpen ? (
          <button
            onClick={handleOpenCamera}
            className="bg-[#1db954] cursor-pointer text-white py-2 px-5 rounded-lg font-semibold hover:bg-[#29d665ed] transition-colors"
          >
            Open Camera
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <button
              onClick={handleVideoPlay}
              className="bg-[#1db954] cursor-pointer text-white py-2 px-5 rounded-lg font-semibold hover:bg-[#29d665ed] transition-colors"
            >
              Capture
            </button>
            <button
              onClick={handleCloseCamera}
              className="bg-[#191414] cursor-pointer text-white py-2 px-5 rounded-lg font-semibold hover:bg-[#191414e2] transition-colors border border-[#1db954]"
            >
              Close Camera
            </button>
          </div>
        )}
      </div>
    </>
  );
}
