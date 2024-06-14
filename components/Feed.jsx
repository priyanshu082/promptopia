'use client'

import { useState,useEffect } from "react"
import { HoverEffect } from "./ui/card-hover-effect"


// const PromptCardList=({data,handleTagClick})=>{
//     console.log(data)
//     return (
//         <div className="mt-16 prompt_layout">
//             {data.map((post)=>(
//                 <PromptCard
//                 key={post._id}
//                 post={post}
//                 handleTagClick={handleTagClick}
//                 />
//             ))}
//         </div>
//     )
// }

const Feed = () => {

    const [searchText, setSearchText] = useState('')
    const [posts, setPosts] = useState([]) 
   
  

    // useEffect(() => {
    //   const fetchPost = async () => {
    //     const response = await fetch(`/api/prompt?t=${Date.now()}`)
    //     const data = await response.json()
    //     const reversedData = [...data].reverse()
    //     console.log(reversedData)        
    //     setPosts(reversedData)
    //   }
    
    //   fetchPost();
    // }, [])

    useEffect(() => {
      const fetchPost = async () => {
        try {
          const response = await fetch(`/api/prompt?t=${Date.now()}`, {
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache',
              'Expires': '0',
            }
          });
          const data = await response.json()
          const reversedData = [...data].reverse()
          console.log(reversedData)        
          setPosts(reversedData)
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }
    
      fetchPost();
    }, [])

    
  return (
    <section className="mt-16 mx-auto w-full flex justify-start items-center flex-col gap-2 min-h-[800px]">
    {/* <form 
    className="relative w-full flex-center">
        <input    
         type='text'
         placeholder="Search for the prompt"
         value={searchText}
         onChange={handleSearchChange}
         required
         className="search_input peer"
         />
    </form> */}

    <HoverEffect items={posts}/>
    </section>
  )
}

export default Feed