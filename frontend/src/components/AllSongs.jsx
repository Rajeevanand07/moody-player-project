import React, { useState } from "react";
import { IoMdPlay } from "react-icons/io";
import sampleSongs from "../data/songs";

const AllSongs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="mt-6 p-10 grid grid-cols-4 gap-4 transition-all duration-700 ease-in-out">
      {sampleSongs.length === 0 ? (
        <p className="text-center text-gray-500 py-8 col-span-4">
          No songs available
        </p>
      ) : (
        sampleSongs.map((song, index) => (
          <div
            key={song.id}
            className="relative rounded-lg overflow-hidden cursor-pointer group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Cover Image */}
            <img
              src={song.cover || "/default-cover.jpg"}
              alt={song.title}
              className="w-full h-56 object-cover"
            />

            {/* Overlay on hover */}
            {hoveredIndex === index && (
              <div className="absolute inset-0 flex items-end justify-end p-4">
                <button className="p-3 bg-[#1db954] text-white rounded-full hover:bg-[#1ed760] transition-all duration-700 ease-in-out">
                  <IoMdPlay size={20} />
                </button>
              </div>
            )}

            {/* Song info */}
            <div className="p-3">
              <div className="text-black font-semibold truncate">{song.title}</div>
              <div className="text-gray-400 text-sm truncate">{song.artist}</div>
              <div className="text-gray-400 text-sm mt-1">
                {formatDuration(song.duration)}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AllSongs;