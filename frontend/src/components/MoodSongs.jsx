import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";

const MoodSongs = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-4">
        <ul className="flex flex-col gap-1.5 w-[35%]">
          <li className="flex justify-between items-center bg-gray-200 py-2 px-5 rounded-lg">
            <div className="flex gap-4 items-center">
              <p className="text-2xl">1.</p><div><h3 className="text-xl capitalize">song title</h3> <h5 className="mt-[-6px]">artist</h5></div>
            </div>
            <span><IoMdPlay/></span>
          </li>
          <li className="flex justify-between items-center bg-gray-200 py-2 px-5 rounded-lg">
            <div className="flex gap-4 items-center">
              <p className="text-2xl">1.</p><div><h3 className="text-xl capitalize">song title</h3> <h5 className="mt-[-6px]">artist</h5></div>
            </div>
            <span><IoMdPlay/></span>
          </li>
          <li className="flex justify-between items-center bg-gray-200 py-2 px-5 rounded-lg">
            <div className="flex gap-4 items-center">
              <p className="text-2xl">1.</p><div><h3 className="text-xl capitalize">song title</h3> <h5 className="mt-[-6px]">artist</h5></div>
            </div>
            <span><IoMdPlay/></span>
          </li>
          
        </ul>
      </div>
    </>
  );
};

export default MoodSongs;
