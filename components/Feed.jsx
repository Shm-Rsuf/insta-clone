import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className="md:col-span-2">
        {/* stories */}
        <Stories />
        {/* posts */}
        <Posts />
      </section>

      <section className="hidden md:inline-grid md:col-span-1">
        <div className="">
          {/* mini profile */}
          <MiniProfile />
          {/* suggession */}
        </div>
      </section>
    </main>
  );
};

export default Feed;
