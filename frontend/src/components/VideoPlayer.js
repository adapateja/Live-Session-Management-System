import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VideoPlayer = () => {
  const { id } = useParams();
  const videoRef = useRef();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/sessions/${id}`);
        console.log("Session data:", res.data);
      } catch (error) {
        console.error("Error fetching session:", error);
        if (error.response?.status === 404) {
          console.error("Session not found or backend server not running");
        }
      }
    };
    if (id) {
      fetchSession();
    }
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Live Session</h2>
      <video
        ref={videoRef}
        width="640"
        height="360"
        controls
        className="rounded-xl shadow-lg"
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoPlayer;
