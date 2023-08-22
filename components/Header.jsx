"use client";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { modalState } from "@/atom/modalAtom";

const Header = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <header className="shadow-md border-b sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center max-w-6xl mx-4 lg:mx-auto">
        {/* LEFT */}
        <div className="w-24 h-24 relative hidden lg:inline-grid cursor-pointer">
          <Image
            onClick={() => router.push("/")}
            src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
            alt="instagram image"
            width={100}
            height={60}
            className="object-contain w-full h-full"
            priority
          />
        </div>
        <div className="w-10 h-16 relative lg:hidden cursor-pointer">
          <Image
            onClick={() => router.push("/")}
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
            alt="instagram image"
            width={100}
            height={60}
            className="object-contain w-full h-full"
            priority
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
          <HomeIcon
            className="hidden sm:inline-flex h-6 cursor-pointer active:scale-x-125 transition-transform duration-300 ease-out"
            onClick={() => router.push("/")}
          />
          {session ? (
            <>
              <PlusCircleIcon
                onClick={() => setOpen(!open)}
                className="h-6 cursor-pointer active:scale-x-125 transition-transform duration-300 ease-out"
              />
              <picture>
                <img
                  src={session?.user?.image}
                  alt={session?.user?.name}
                  className="w-10 h-10 rounded-full cursor-pointer"
                  onClick={signOut}
                />
              </picture>
            </>
          ) : (
            <button onClick={signIn}>Sign in</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
