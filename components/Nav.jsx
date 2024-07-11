"use client";

import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedOut, useClerk, useUser } from "@clerk/nextjs";

const Nav = () => {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  

  return (
    <nav className="w-[90vw] flex flex-row justify-between items-center my-[2vw]">
      <Link href="/" className="flex gap-2 w-fit">
        <Image
          src="/assests/images/logo.svg"
          width={35}
          height={35}
          className="object-contain"
          alt="logo"
        />
        <p className="logo_text">Promtopia</p>
      </Link>

      {!isSignedIn ? (
        <div className="rounded-2xl bg-white py-1.5 px-5 text-black transition-all hover:bg-orange-600 hover:text-white text-center text-sm font-inter flex items-center justify-center">
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      ) : (
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="rounded-full border border-black bg-orange-600 py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center">
            Create post
          </Link>
          <button 
            type="button"  
            className="outline_btn"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
          <Link href="/profile">
            <img
              src={user?.imageUrl}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
            />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;