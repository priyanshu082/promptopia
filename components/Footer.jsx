import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (

    <div className="flex flex-col h-fit justify-center md:h-[300px] border-t-[1px]">

 <div className=" flex flex-col md:flex-row justify-around sm:pt-[45px] w-[100%] mt-[20px] h-fit">
      <div className="flex flex-col w-[90%] mx-auto md:w-[35%] md:text-left text-center">
        <div className="font1 font-bold text-zinc-300 text-[25px] ">
         PROMTOPIA
        </div>
        <div className="text-zinc-400 text-[16px]">
          "The place where you can share and find best prompts."
        </div>
      </div>

      {/* about periodix */}
      <div className="flex flex-col w-[90%] mx-auto md:w-[40%] mt-[10px] md:mt-[0px] md:text-left text-center">
        <div className="font1 font-bold text-zinc-300 text-[25px]">
          ABOUT ME
        </div>
        <div className="text-zinc-400 text-[14px]">
          "Hello! I'm Priyanshu Singh, a passionate and dedicated individual and a keen interest in the world of technology. Currently, I am pursuing my education at ZHCET, AMU, where I am majoring in Computer Engineering. I delve into the intricate world of web development and hone my skills in solving complex problems through Data Structures and Algorithms."
        </div>
      </div>

    </div>
    
    <div className="  text-zinc-300 py-[10px] mt-[20px] text-[16px] tracking-tighter flex flex-row text-center justify-center">
            <p>Developed By Priyanshu Singh</p>
            <a href='https://github.com/priyanshu082' target="_blank" rel="noopener noreferrer" className='ml-[10px] pb-[4px]'>
  <GitHubIcon className='  w-[20px] h-[20px] text-orange-400'/>
</a> 

<a href='https://www.linkedin.com/in/priyanshu-singh-a81975253/' target="_blank" rel="noopener noreferrer" className='ml-[10px] pb-[4px]'>
  <LinkedInIcon className='  w-[20px] h-[20px] text-orange-400'/>
  </a>
    </div>
    </div>
   
  );
};

export default Footer;
