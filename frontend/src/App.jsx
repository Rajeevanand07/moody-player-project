import "./App.css";
import Nav from "./components/Nav";
import { useState } from "react";
import Skeleton from "./components/Skeleton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllSongs from "./components/AllSongs";

function App() {
  const [songs, setSongs] = useState([]);
  return (
    <>
    <Router>
        <Nav />
        <div className="flex justify-center h-[85%] pl-20 overflow-y-hidden" >
          <div className="w-[30%] mt-20">
            <Skeleton />
          </div>
          <div className="w-[70%] h-[100%] overflow-y-hidden">
            <Routes>
              <Route path="/" element={<AllSongs/>} />
              <Route path="/songs" element={<Home songs={songs} setSongs={setSongs} />} />
            </Routes>
          </div>
        </div>
    </Router>
    </>
  );
}

export default App;
