import Feed from "@/components/Feed";
import Header from "@/components/Header";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HEADER */}
      <Header />
      {/* FEED */}
      <Feed />
      {/* MODAL */}
    </div>
  );
};

export default HomePage;
