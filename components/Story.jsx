const Story = ({ username, img }) => {
  return (
    <div>
      <picture className="">
        <img
          src={img}
          alt={username}
          className="h-14 rounded-full p-[1.5px] border-2 border-rose-500 cursor-pointer ease-out hover:scale-110 transition-transform duration-200"
        />
      </picture>
      <h3 className="text-xs w-14 truncate">{username}</h3>
    </div>
  );
};

export default Story;
