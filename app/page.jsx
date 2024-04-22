import Feed from "@/components/Feed"
import { TextRevealCard } from "@/components/ui/Reveal"

const Home = () => {
  return (
    <section className=" w-full flex-center flex-col">
        
        <TextRevealCard
        revealText="Discover & share" 
        text="Discover & share"/> 
        <TextRevealCard
        revealText="AI-Powered Prompts" 
        text="AI-Powered Prompts"/> 
        
      <Feed/>
    </section>
  )
}
 
export default Home