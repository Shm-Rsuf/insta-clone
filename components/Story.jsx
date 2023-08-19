import { PlusIcon } from "@heroicons/react/solid";

const Story = ({ username, img, isUser }) => {
  return (
    <div className="relative group cursor-pointer">
      <picture className="">
        <img
          src={img}
          alt={username}
          className="h-14 rounded-full p-[1.5px] border-2 border-rose-500 ease-out group-hover:scale-110 transition-transform duration-200"
        />
      </picture>
      {isUser && <PlusIcon className="h-6 absolute top-4 left-4 text-white" />}
      <h3 className="text-xs w-14 truncate">{username}</h3>
    </div>
  );
};

export default Story;
