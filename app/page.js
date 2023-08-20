import Feed from "@/components/Feed";
import Header from "@/components/Header";
import UploadModal from "@/components/UploadModal";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HEADER */}
      <Header />
      {/* FEED */}
      <Feed />
      {/* MODAL */}
      <UploadModal />
    </div>
  );
};

export default HomePage;
