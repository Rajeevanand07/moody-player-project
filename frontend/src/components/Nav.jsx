import { NavLink } from "react-router-dom";
import logo from "/logo.png";
const Nav = () => {
  return (
    <div className="flex justify-between items-center py-5 px-9 gap-6">
      <div className="w-15">
        <img className="w-full h-full object-cover" src={logo} alt="" />
      </div>
      <div className="flex gap-5">
        <NavLink to="/">
          {({ isActive }) => (
            <div className="relative group">
              <span className="cursor-pointer text-lg">Songs</span>
              <span className={`absolute left-0 bottom-0 w-full h-[1.5px] bg-[#1db954] transition-all duration-[300ms] ease-in-out origin-center ${
                isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </div>
          )}
        </NavLink>
        <NavLink to="/songs">
          {({ isActive }) => (
            <div className="relative group">
              <span className="cursor-pointer text-lg whitespace-nowrap">Mood songs</span>
              <span className={`absolute left-0 bottom-0 w-full h-[1.5px] bg-[#1db954] transition-all duration-[300ms] ease-in-out origin-center ${
                isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </div>
          )}
        </NavLink>
      </div>
      <NavLink to="/admin">
        <button className="text-white bg-[#1db954] px-5 py-2 rounded-full font-semibold hover:text-white hover:bg-[#38D970] transition-all duration-400 ease-in-out">
          Admin
        </button>
      </NavLink>
    </div>
  );
};

export default Nav;