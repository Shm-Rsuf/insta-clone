const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-10 ml-10">
      <picture>
        <img
          src="https://res.cloudinary.com/dlc8v0etj/image/upload/v1675931938/cover1_vtesoo.jpg"
          alt="user image"
          className="w-16 h-16 rounded-full cursor-pointer border p-[2px]"
        />
      </picture>
      <div className="flex-1 ml-3">
        <h3 className="font-semibold">codewithrsuf</h3>
        <h3 className="text-sm text-gray-400">welcome to instagram</h3>
      </div>
      <button className="font-semibold text-sm text-blue-400 tracking-wide">
        sign out
      </button>
    </div>
  );
};

export default MiniProfile;
