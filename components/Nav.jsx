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
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center mr-[210px]">
        <Image src="/assests/images/logo.svg" width={35} height={35} className="object-contain" />
        <p className="logo_text">Promtopia</p>
      </Link>

      {/* desktop  app view */}

      <div className="sm:flex hidden">
        {session?.user ?
          (<div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center">
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

      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropDown(!toggleDropDown)} />


            {toggleDropDown && (
              <div className='dropdown'>
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}>
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}>
                  Create prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false)
                    signOut();
                  }}
                  className="black_btn"
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