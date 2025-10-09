import "./App.css";
import FacialExpression from "./components/FacialExpression";
import MoodSongs from "./components/MoodSongs";
import Nav from "./components/Nav";
import { useState } from "react";
import Skeleton from "./components/Skeleton";
import AllSongs from "./components/AllSongs";

function App() {
  const [songs, setSongs] = useState([]);
  return (
    <>
      <Nav />
      <div className="flex h-[85%] justify-center items-center pl-20">
        <div className="w-[30%]">
          <Skeleton />
        </div>
        <div className="w-[70%]">
          {/* <FacialExpression setSongs={setSongs} />
          <MoodSongs songs={songs} /> */}
          <AllSongs songs={songs} />
        </div>
      </div>
    </>
  );
}

export default App;
