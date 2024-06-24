import Feed from "@/components/Feed";
import { TextRevealCard } from "@/components/ui/Reveal";

const Home = () => {
  return (
    <section className="  w-[100vw] overflow-clip flex-center flex-col ">
      
      <div className="">
        <TextRevealCard revealText="Discover & share" text="Discover & share" />
        <TextRevealCard revealText="AI Prompts" text="AI Prompts" />
      </div>

      <Feed />
    </section>
  );
};

export default Home;
