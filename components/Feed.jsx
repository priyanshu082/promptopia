"use client"

import { useState,useEffect } from "react"
import { HoverEffect } from "./ui/card-hover-effect"
import axios from "axios"


const Feed = () => {

    const [searchText, setSearchText] = useState('')
    const [posts, setPosts] = useState([]) 

    useEffect(() => {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`/api/prompt`)
          console.log(response)
          const data = response.data
          const reversedData = [...data].reverse()
          if(response){console.log(reversedData)}     
          setPosts(reversedData)
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }
      fetchPost();
    }, [])

    
  return (
    <section className="mt-16 mx-auto w-full flex justify-start items-center flex-col gap-2 min-h-[800px]">
    

    <HoverEffect items={posts}/>
    </section>
  )
}

export default Feed