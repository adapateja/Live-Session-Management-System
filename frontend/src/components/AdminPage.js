import React, { useState } from "react";
import axios from "axios";
import VideoPlayer from "./VideoPlayer";

const AdminPage = () => {
  const [session, setSession] = useState(null);

  const handleStartSession = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/sessions/start");
      setSession(res.data);
    } catch (error) {
      console.error("Error starting session:", error);
      alert(`Error: ${error.response?.data?.message || error.message || "Failed to start session. Make sure the backend server is running on port 5000."}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {!session ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Start Live Session</h1>
          <button
            onClick={handleStartSession}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            START SESSION
          </button>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-xl mb-2">✅ Session Created!</h2>
          <p>Share this URL with student:</p>
          <a
            href={session.userUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {session.userUrl}
          </a>
          <VideoPlayer />
        </div>
      )}
    </div>
  );
};

export default AdminPage;
