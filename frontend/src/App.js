import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/session/:id" element={<VideoPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
