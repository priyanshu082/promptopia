'use client'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null)

  const [toggleDropDown, setToggleDropDown] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    fetchData();
  }, [])


  return (
    <nav className=" w-[90vw] flex  flex-row justify-between items-center my-[2vw]">

      <Link href="/" className="flex gap-2 w-fit">
        <Image src="/assests/images/logo.svg" width={35} height={35} className="object-contain" />
        <p className="logo_text">Promtopia</p>
      </Link>

      {/* desktop  app view */}

      <div className="sm:flex hidden">
        {session?.user ?
          (<div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="rounded-full border border-black bg-orange-600 py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center">
              Create post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37} height={37}
                className="rounded-full" alt="profile" />
            </Link>

          </div>) :

          (<>
            {providers &&
              Object.values(providers).map((provider) => (
                <button type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>)}
      </div>

      {/* mobile naviagtion */}

      <div className="sm:hidden flex flex-row ">
        {session?.user ? (
          <div className="relative">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => {setToggleDropDown(!toggleDropDown);console.log(toggleDropDown)}} />


          {toggleDropDown && (
              <div className='absolute mt-[1vw] items-center justify-center py-[2vw] px-[2vw] rounded-lg bg-orange-200 w-fit flex flex-col gap-4 z-[10000] ml-[-20vw]'>
                <Link
                  href="/profile"
                  className="text-[3vw] md:text-[2vw] w-[20vw]  text-center"
                  onClick={() => setToggleDropDown(false)}>
                  My Profile
                </Link>

                <Link
                  href="/create-prompt"
                  className="text-[3vw] md:text-[2vw] w-[25vw] text-center"
                  onClick={() => setToggleDropDown(false)}>
                  Create prompt
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false)
                    signOut();
                  }}
                  className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-[3vw] md:text-[2vw] font-inter flex items-center justify-center"
                >
                  Sign Out
                </button>

              </div>
            )} 
          </div>)
          :
          (<>
            {providers &&
              Object.values(providers).map((provider) => (
                <button type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>)}
      </div>

    </nav>
  )
}

export default Nav