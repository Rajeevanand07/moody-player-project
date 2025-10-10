import React, { useContext } from "react";
import { IoMdPlay, IoMdSkipForward, IoMdSkipBackward, IoMdPause } from "react-icons/io";
import { SongContext } from "../context/songContext";

const Skeleton = () => {
  const { getCurrentSongs, currentSongIndex, togglePlayPause, isPlaying, nextSong, previousSong } = useContext(SongContext);
  const currentSongs = getCurrentSongs();
  const currentSong = currentSongs[currentSongIndex];

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-7xl text-center capitalize text-[#1db954] font-semibold">
          The <span className=" text-7xl font-black text-[#191414]">lens</span>{" "}
          feels the{" "}
          <span className="text-7xl font-black text-[#191414]">beat</span>.
        </p>
        <div className="mt-10 mx-10 w-full max-w-xl md:mx-auto rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
          <div className="flex items-center justify-between gap-5">
            <div className="w-24 h-24 rounded-md overflow-hidden bg-gray-100">
              <img src={currentSong?.image} alt="" />
            </div>
            <div className="flex flex-col items-center gap-2 justify-center">
            <div className="flex-1 min-w-0">
              <div className="text-xl capitalize font-semibold text-[#191414] truncate">
                {currentSong?.title || "Track Title"}
              </div>
              <div className="text-sm mt-[-5px] text-gray-500 truncate">
                {currentSong?.artist || "Artist Name"}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={previousSong} className="px-3 py-2 rounded-md bg-gray-100 text-[#191414] hover:bg-gray-200">
                <IoMdSkipBackward />
              </button>
              <button onClick={togglePlayPause} className={`px-4 py-3 rounded-full text-white hover:brightness-95 ${isPlaying ? 'bg-red-500' : 'bg-[#1db954]'}`}>
                {isPlaying ? <IoMdPause size={22} /> : <IoMdPlay size={22} />}
              </button>
              <button onClick={nextSong} className="px-3 py-2 rounded-md bg-gray-100 text-[#191414] hover:bg-gray-200">
                <IoMdSkipForward />
              </button>
            </div>
            </div>
          </div>
          {isPlaying && (
            <audio
              className="hidden"
              autoPlay={isPlaying}
              src={currentSong?.audio || ""}
              controls
              onEnded={nextSong}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Skeleton;
