"use client";

import minifaker from "minifaker";
import "minifaker/locales/en";
import Story from "./Story";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const Stories = () => {
  const [storyUsers, setStoryUsers] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(storyUsers);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-5 border border-gray-200 overflow-x-scroll rounded-sm scrollbar-none">
      {session && (
        <Story
          img={session?.user.image}
          username={session?.user.name.split(" ").join("").toLocaleLowerCase()}
          isUser="true"
        />
      )}
      {storyUsers.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
};

export default Stories;
