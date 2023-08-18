"use client";
import Header from "@/components/Header";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const SignInPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      <div className="flex justify-center gap-5 mt-20">
        <picture>
          <img
            src="https://superviral.com.au/wp-content/uploads/2021/10/Buy-Instagram-Followers-Australia.png"
            alt="Instagram"
            className="hidden object-cover rotate-6 sm:inline-flex md:w-48"
          />
        </picture>
        <div className="">
          <div className="flex flex-col items-center gap-10">
            <picture>
              <img
                src="https://freelogopng.com/images/all_img/1658587162instagram-logo-png-hd.png"
                alt="instagram image"
                className="w-36 object-cover"
              />
            </picture>
            <p className="text-sm italic text-center">
              This app is created for learning purpose
            </p>
            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="bg-rose-400 hover:bg-rose-500 transition-colors duration-300 ease-out rounded-lg py-3 px-4 cursor-pointer text-white tracking-wide"
            >
              Sign in with google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
