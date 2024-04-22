import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image'
import { useState } from "react";
import copyIcon from '../../public/assests/icon/copy.svg'
import tickIcon from '../../public/assests/icon/tick.svg'
import { Meteors } from "./Meteors";
import { Tilt } from "react-tilt";

export const HoverEffect = ({
  items,
  className,
}) => {

  let [hoveredIndex, setHoveredIndex] = useState(null);
  const [copy, setCopy] = useState("")
  const handleCopy=()=>{
    setCopy(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => {
      setCopy("")
    }, 3000);
  }
  

  return (
    <div
      className={cn(
        "flex flex-row h-full w-[80vw] mt-[3vw] flex-wrap justify-center items-center",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link || ".."}
          key={item?.link}
          className="relative group block p-2 "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full bg-neutral-200 dark:bg-orange-800 rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.25 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.25, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          
          <Card >
          <div className='flex justify-between items-start '>
        <div className='flex-1 flex justify-start items-center cursor-pointer gap-3'>
          <Image
          src={item.creator?.image}
          alt="user_image"
          width={50}
          height={50}
          className='rounded-full object-contain'
          />

          <div className='felx lfex-col'>
            <h3 className='font-satoshi font-semibold text-gray-200'>
              {item.creator?.username}
            </h3>
            <p className='font-inter text-sm text-gray-400'>
              {item.creator?.email}
            </p>
          </div>

        </div>
        <div className='copy_btn' 
        onClick={handleCopy}
        >
          <Image
          src={copy===item.prompt ? tickIcon : copyIcon }
          width={20}
          height={20}
          />
        </div>
      </div>
            <CardDescription>{item.prompt}</CardDescription>
            <div className="mt-[2vw]">
            <CardTitle>{item.tag}</CardTitle>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl min-h-[20vw] max-h-[20vw] min-w-[25vw] max-w-[25vw]overflow-hidden bg-black hover:bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 flex flex-col justify-between  relative z-20",
        className
      )}
    >
      <div className="relative z-50 ">
        <div className="p-4 flex flex-col ">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4 blue_gradient", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-300 tracking-wide leading-relaxed text-lg w-[80%]",
        className
      )}
    >
      {children}
    </p>
  );
};
