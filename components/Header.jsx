import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-4 lg:mx-auto">
      {/* LEFT */}
      <div className="w-24 h-24 relative hidden lg:inline-grid cursor-pointer">
        <Image
          src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
          alt="instagram image"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="w-10 h-16 relative lg:hidden cursor-pointer">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
          alt="instagram image"
          layout="fill"
          className="object-contain"
        />
      </div>
      {/* MIDDLE */}
      <div className="relative mt-1">
        <div className="absolute top-1/2 -translate-y-1/2 left-2">
          <SearchIcon className="h-5 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-50 pl-10 border-gray-500 text-sm focus:border-gray-600 focus:ring-gray-600 rounded-md"
        />
      </div>
      {/* RIGHT */}
      <div className=" flex items-center gap-4">
        <HomeIcon className="hidden sm:inline-flex h-6 cursor-pointer hover:scale-x-125 transition-transform duration-300 ease-out" />
        <PlusCircleIcon className="h-6 cursor-pointer hover:scale-x-125 transition-transform duration-300 ease-out" />
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt="user image"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
