import React from "react";
import { IoMdPlay, IoMdSkipForward, IoMdSkipBackward } from "react-icons/io";
const Skeleton = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-7xl text-center capitalize text-[#1db954] font-semibold">
          The <span className=" text-7xl font-black text-[#191414]">lens</span>{" "}
          feels the{" "}
          <span className="text-7xl font-black text-[#191414]">beat</span>.
        </p>
        <div className="mt-10 w-full max-w-xl mx-auto rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
          <div className="flex items-center justify-between gap-5">
            <div className="w-24 h-24 rounded-md overflow-hidden bg-gray-100">
              <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200" />
            </div>
            <div className="flex flex-col items-center gap-2 justify-center">
            <div className="flex-1 min-w-0">
              <div className="text-xl font-semibold text-[#191414] truncate">
                Track Title
              </div>
              <div className="text-sm mt-[-5px] text-gray-500 truncate">Artist Name</div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-3 py-2 rounded-md bg-gray-100 text-[#191414] hover:bg-gray-200">
                <IoMdSkipBackward size={20} />
              </button>
              <button className="px-4 py-3 rounded-full bg-[#1db954] text-white hover:brightness-95">
                <IoMdPlay size={22} />
              </button>
              <button className="px-3 py-2 rounded-md bg-gray-100 text-[#191414] hover:bg-gray-200">
                <IoMdSkipForward size={20} />
              </button>
            </div>
            </div>
          </div>
          <div className="mt-5">
            <input
              type="range"
              min={0}
              max={225}
              defaultValue={45}
              readOnly
              className="w-full accent-[#1db954] cursor-default"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0:45</span>
              <span>3:45</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skeleton;
