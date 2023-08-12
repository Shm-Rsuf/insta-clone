import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl">
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
      <h2>Right side</h2>
    </div>
  );
};

export default Header;
