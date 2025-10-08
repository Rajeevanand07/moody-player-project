const Nav = () => {
  return (
    <div className="flex justify-between items-center py-5 px-9 gap-6 bg-white">
      <h1>logo</h1>
      <div className="flex gap-5">
        <div className="relative group">
          <span className="cursor-pointer text-lg">Songs</span>
          <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-[300ms] ease-in-out origin-center"></span>
        </div>
        <div className="relative group">
          <span className="cursor-pointer text-lg">Mood songs</span>
          <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-[300ms] ease-in-out origin-center"></span>
        </div>
      </div>
      <button>login</button>
    </div>
  );
};

export default Nav;
