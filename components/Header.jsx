import Image from "next/image";

const Header = () => {
  return (
    <header className="">
      {/* LEFT */}
      <div className="">
        <div className="w-24 h-24 relative hidden lg:inline-grid cursor-pointer">
          <Image
            src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
            alt="instagram image"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>
      {/* MIDDLE */}
      {/* RIGHT */}
    </header>
  );
};

export default Header;
