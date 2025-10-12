import React, { useContext, useEffect, useState } from "react";
import { IoMdPlay, IoMdPause } from "react-icons/io";
import axios from "axios";
import { SongContext } from "../context/songContext";

const AllSongs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { playSong, pauseSong, currentSongIndex, isPlaying, getCurrentSongs, getCurrentSetSongs } = useContext(SongContext);

  const currentSongs = getCurrentSongs();
  const setCurrentSongs = getCurrentSetSongs();

  const handlePlayPause = (index) => {
    if (currentSongIndex === index && isPlaying) {
      pauseSong();
    } else {
      playSong(index);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://moody-player-project.onrender.com/");
      setCurrentSongs(response.data.songs);
    }
    fetchData();
  }, [setCurrentSongs]);

  return (
    <div className="h-[100%] overflow-y-auto">
      <div className="mt-6 p-5  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-700 ease-in-out">
        {currentSongs.length === 0 ? (
          <p className="text-center text-gray-500 py-8 col-span-4">
            No songs available
          </p>
        ) : (
          currentSongs.map((song, index) => (
            <div
              key={song._id}
              onClick={() => handlePlayPause(index)}
              className="relative rounded-lg overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Cover Image */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src={song.image}
                  alt={song.title}
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Overlay on hover */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 flex items-end justify-end p-4">
                  <button className="p-3 bg-[#1db954] text-white rounded-full hover:bg-[#1ed760] transition-all duration-700 ease-in-out">
                    {currentSongIndex === index && isPlaying ? <IoMdPause /> : <IoMdPlay />}
                  </button>
                </div>
              )}

              {/* Song info */}
              <div className="p-3">
                <div className="text-black capitalize font-semibold truncate">
                  {song.title}
                </div>
                <div className="text-gray-400 text-sm truncate">
                  {song.artist}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllSongs;
