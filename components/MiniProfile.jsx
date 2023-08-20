import { useSession, signOut } from "next-auth/react";

const MiniProfile = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-10 ml-10">
      <picture>
        <img
          src={session?.user.image}
          alt={session?.user.name}
          className="w-16 h-16 rounded-full cursor-pointer border p-[2px]"
        />
      </picture>
      <div className="flex-1 ml-3">
        <h3 className="font-semibold">
          {session?.user.name.split(" ").join("").toLocaleLowerCase()}
        </h3>
        <h3 className="text-sm text-gray-400">welcome to instagram</h3>
      </div>
      <button
        className="font-semibold text-sm text-blue-400 tracking-wide"
        onClick={signOut}
      >
        sign out
      </button>
    </div>
  );
};

export default MiniProfile;
