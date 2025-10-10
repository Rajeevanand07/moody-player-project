import FacialExpression from "./FacialExpression";
import MoodSongs from "./MoodSongs";

const Home = ({ songs, setSongs }) => {
  return (
    <>
      <FacialExpression setSongs={setSongs} />
      <MoodSongs songs={songs} />
    </>
  );
};

export default Home;
