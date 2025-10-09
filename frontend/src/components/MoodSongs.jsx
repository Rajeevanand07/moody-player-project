import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";

const MoodSongs = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-4">
        <ul className="flex flex-col gap-1.5 w-[35%]">
          <li className="flex justify-between items-center bg-gray-100 py-2 px-5 rounded-lg border border-gray-200 group hover:cursor-pointer">
            <div className="flex gap-4 items-center">
              <p className="text-2xl text-[#1db954] font-bold">1.</p>
              <div>
                <h3 className="text-xl capitalize text-[#191414] font-semibold">song title</h3>
                <h5 className="mt-[-6px] text-gray-500">artist</h5>
              </div>
            </div>
            <span className="text-[#1db954] group-hover:bg-[#1db954] group-hover:text-white rounded-full p-2 transition-colors duration-300 cursor-pointer">
              <IoMdPlay />
            </span>
          </li>
          <li className="flex justify-between items-center bg-gray-100 py-2 px-5 rounded-lg border border-gray-200 group hover:cursor-pointer">
            <div className="flex gap-4 items-center">
              <p className="text-2xl text-[#1db954] font-bold">1.</p>
              <div>
                <h3 className="text-xl capitalize text-[#191414] font-semibold">song title</h3>
                <h5 className="mt-[-6px] text-gray-500">artist</h5>
              </div>
            </div>
            <span className="text-[#1db954] group-hover:bg-[#1db954] group-hover:text-white rounded-full p-2 transition-colors duration-300 cursor-pointer">
              <IoMdPlay />
            </span>
          </li>
          <li className="flex justify-between items-center bg-gray-100 py-2 px-5 rounded-lg border border-gray-200 group hover:cursor-pointer">
            <div className="flex gap-4 items-center">
              <p className="text-2xl text-[#1db954] font-bold">1.</p>
              <div>
                <h3 className="text-xl capitalize text-[#191414] font-semibold">song title</h3>
                <h5 className="mt-[-6px] text-gray-500">artist</h5>
              </div>
            </div>
            <span className="text-[#1db954] group-hover:bg-[#1db954] group-hover:text-white rounded-full p-2 transition-colors duration-300 cursor-pointer">
              <IoMdPlay />
            </span>
          </li>
          
        </ul>
      </div>
    </>
  );
};

export default MoodSongs;