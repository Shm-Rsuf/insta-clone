"use client";
import minifaker from "minifaker";
import "minifaker/locales/en";
import { useEffect, useState } from "react";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="font-semibold text-gray-400 tracking-wide">
          suggestions for you
        </h3>
        <button className="font-semibold text-gray-600 tracking-wide">
          see all
        </button>
      </div>
      {suggestions.map((suggestion) => (
        <div
          className="flex items-center justify-between mt-3"
          key={suggestion.id}
        >
          <picture>
            <img
              src={`https://i.pravatar.cc/150?img=${Math.ceil(
                Math.random() * 70
              )}`}
              alt={suggestion.username}
              className="h-10 rounded-full border p-[2px]"
            />
          </picture>
          <div className="flex-1 ml-4">
            <h3 className="font-semibold text-sm">{suggestion.username}</h3>
            <h4 className="text-sm text-gray-400 truncate w-56">
              {suggestion.jobTitle}
            </h4>
          </div>
          <button className="font-semibold text-blue-400 tracking-wide text-sm">
            follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
