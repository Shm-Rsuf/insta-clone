import Image from "next/image";

const Header = () => {
  return (
    <header className="">
      {/* LEFT */}
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
        <h2>Right side</h2>
      </div>
      {/* MIDDLE */}
      {/* RIGHT */}
    </header>
  );
};

export default Header;
