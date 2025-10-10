import "./App.css";
import Nav from "./components/Nav";
import { useState } from "react";
import Skeleton from "./components/Skeleton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllSongs from "./components/AllSongs";
import { SongProvider } from "./context/songContext";

function App() {
  return (
    <SongProvider>
      <Router>
        <Nav />
        <div className="flex justify-center h-[85%] pl-20 overflow-y-hidden" >
          <div className="w-[30%] mt-20">
            <Skeleton />
          </div>
          <div className="w-[70%] h-[100%] overflow-y-hidden">
            <Routes>
              <Route path="/" element={<AllSongs />} />
              <Route path="/songs" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </SongProvider>
  );
}

export default App;
