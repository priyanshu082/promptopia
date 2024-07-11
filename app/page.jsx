"use client"
import Feed from "@/components/Feed";
import { TextRevealCard } from "@/components/ui/Reveal";
import { useEffect,useState } from "react";
import axios from "axios";

const Home = () => {
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
    <section className="  w-[100vw] overflow-clip flex-center flex-col ">
      
      <div className="">
        <TextRevealCard revealText="Discover & share" text="Discover & share" />
        <TextRevealCard revealText="AI Prompts" text="AI Prompts" />
      </div>

      <Feed posts={posts}/>
    </section>
  );
};

export default Home;
