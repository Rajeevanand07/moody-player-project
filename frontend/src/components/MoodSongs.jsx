import { useState } from "react";
import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";

const MoodSongs = ({ songs }) => {
  const [isPlaying, setIsPlaying] = useState(null);

  const handlePlayPause = (index) => {
    if (isPlaying === index) {
      setIsPlaying(null);
    } else {
      setIsPlaying(index);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center mt-4">
        {songs.length === 0 ? (
          <p className="mt-20 text-5xl capitalize text-[#1db954] font-black">
            Camera{" "}
            <span className="bg-gradient-to-l from-[#1db954] via-emerald-500 to-[#191414] bg-clip-text text-transparent">
              clicks
            </span>{" "}
            to{" "}
            <span className="bg-gradient-to-l from-[#1db954] via-emerald-500 to-[#191414] bg-clip-text text-transparent">
              rhythm
            </span>
          </p>
        ) : (
          <ul className="flex flex-col gap-1.5 w-[50%]">
            {songs.map((song, index) => (
              <li
              onClick={() => handlePlayPause(index)}
                key={song.id}
                className="flex justify-between items-center bg-gray-100 py-2 px-5 rounded-lg border border-gray-200 group hover:cursor-pointer"
              >
                <div className="flex gap-4 items-center">
                  <p className="text-2xl text-[#1db954] font-bold">
                    {index + 1}.
                  </p>
                  <div>
                    <h3 className="text-xl capitalize text-[#191414] font-semibold">
                      {song.title}
                    </h3>
                    <h5 className="mt-[-6px] text-gray-500">{song.artist}</h5>
                  </div>
                </div>
                {isPlaying === index && (
                  <audio
                    className="hidden"
                    autoPlay
                    src={song.audio}
                    controls
                  />
                )}
                <span
                  className="text-[#1db954] group-hover:bg-[#1db954] group-hover:text-white rounded-full p-2 transition-colors duration-300 cursor-pointer"
                >
                  {isPlaying === index ? <IoMdPause /> : <IoMdPlay />}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default MoodSongs;
