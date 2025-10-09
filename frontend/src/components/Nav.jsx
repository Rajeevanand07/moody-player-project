const Nav = () => {
  return (
    <div className="flex justify-between items-center py-5 px-9 gap-6">
      <h1 className="text-[#1db954] text-2xl font-bold">logo</h1>
      <div className="flex gap-5">
        <div className="relative group">
          <span className="cursor-pointer text-lg">Songs</span>
          <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-[#1db954] scale-x-0 group-hover:scale-x-100 transition-all duration-[300ms] ease-in-out origin-center"></span>
        </div>
        <div className="relative group">
          <span className="cursor-pointer text-lg">Mood songs</span>
          <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-[#1db954] scale-x-0 group-hover:scale-x-100 transition-all duration-[300ms] ease-in-out origin-center"></span>
        </div>
      </div>
      <button className="text-white bg-[#1db954] px-5 py-2 rounded-full font-semibold hover:text-white hover:bg-[#38D970] transition-all duration-400 ease-in-out">
        login
      </button>
    </div>
  );
};

export default Nav;
