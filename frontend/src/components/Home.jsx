import FacialExpression from "./FacialExpression";
import MoodSongs from "./MoodSongs";
import { useContext } from "react";
import { SongContext } from "../context/songContext";

const Home = () => {
  const { moodSongs, setMoodSongs } = useContext(SongContext);

  return (
    <>
      <FacialExpression setSongs={setMoodSongs} />
      <MoodSongs songs={moodSongs} />
    </>
  );
};

export default Home;
