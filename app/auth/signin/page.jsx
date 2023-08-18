"use client";
import Header from "@/components/Header";
import { signIn } from "next-auth/react";

const SignInPage = () => {
  return (
    <>
      <Header />
      <div className="">
        <picture>
          <img
            src="https://superviral.com.au/wp-content/uploads/2021/10/Buy-Instagram-Followers-Australia.png"
            alt="Instagram"
          />
        </picture>
        <div className="">
          <button onClick={() => signIn("google")}>sign in</button>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
