import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";

const Feed = () => {
  return (
    <main>
      <section>
        {/* stories */}
        <Stories />
        {/* posts */}
        <Posts />
      </section>

      <section className="hidden md:inline-grid">
        <div className="fixed w-96">
          {/* mini profile */}
          <MiniProfile />
          {/* suggession */}
        </div>
      </section>
    </main>
  );
};

export default Feed;
