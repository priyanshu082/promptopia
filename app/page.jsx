import Feed from "@/components/Feed"
import { TextRevealCard } from "@/components/ui/Reveal"
import { Meteors } from "@/components/ui/Meteors"

const Home = () => {
  return (
    <section className=" bg-pink-200 w-[100vw] overflow-clip flex-center flex-col ">

          <Meteors />
          <div className="">
          <TextRevealCard revealText="Discover & share" text="Discover & share"/> 
        <TextRevealCard revealText="AI-Powered Prompts" text="AI-Powered Prompts"/>  
          </div>
        
        
      <Feed/>
    </section>
  )
}
 
export default Home