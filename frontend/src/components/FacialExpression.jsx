import React, { useRef } from "react";
import * as faceapi from "face-api.js";

export default function FacialExpression() {
  const videoRef = useRef();
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
        })
        .catch((err) => console.error("Error accessing webcam: ", err));
    };
    const handleVideoPlay = async() => {
        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceExpressions();
        const expression = detections[0]?.expressions;
        if (expression) {
          const maxValue = Math.max(...Object.values(expression));
          const emotion = Object.keys(expression).find(
            (key) => expression[key] === maxValue
          );
          console.log("Detected emotion:", emotion);
        }
        
    };
    loadModels().then(startVideo);
  return (
    <>
    <div style={{ position: "relative" }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        style={{ width: "720px", height: "560px" }}
      />
      
    </div>
    <button onClick={handleVideoPlay}>
      capture
    </button>
    </>
  );
}
