"use client"

import { useState,useEffect } from "react"
import { HoverEffect } from "./ui/card-hover-effect"
import axios from "axios"


const Feed = ({posts}) => {

    const [searchText, setSearchText] = useState('')

  return (
    <section className="mt-16 mx-auto w-full flex justify-start items-center flex-col gap-2 min-h-[800px]">
    <HoverEffect items={posts}/>
    </section>
  )
}

export default Feed