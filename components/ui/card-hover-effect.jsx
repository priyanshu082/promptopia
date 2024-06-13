import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image'
import { useState } from "react";
import copyIcon from '../../public/assests/icon/copy.svg'
import tickIcon from '../../public/assests/icon/tick.svg'
import { useSession } from 'next-auth/react'
import { usePathname,useRouter } from 'next/navigation'


export const HoverEffect = ({
  items,
  className,
  handleDelete,
  handleEdit
}) => {

  let [hoveredIndex, setHoveredIndex] = useState(null);
  const [copy, setCopy] = useState("")

  const {data:session}=useSession();
  const pathName=usePathname();
  const router=useRouter

  const handleCopy=(item)=>{
    setCopy(item.prompt)
    navigator.clipboard.writeText(item.prompt)
    setTimeout(() => {
      setCopy("")
    }, 3000);
  }




  return (
    <div
      className={cn(
        "flex flex-row h-full w-[90vw]  mt-[3vw] flex-wrap justify-center items-center",
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

          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-200'>
              {item.creator?.username}
            </h3>
            <p className='font-inter text-sm text-gray-400'>
              {item.creator?.email}
            </p>
          </div>

        </div>
        <div className='copy_btn' 
        onClick={()=>handleCopy(item)}
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
            {session?.user.id ===item.creator?._id && pathName==='/profile' && (
          <div className='mt-5 flex-center gap-4 border-t-[1px] border-gray-600 pt-3'>
            <Link href={`/update-prompt/${item._id}`} className='font-inter bg-white text-sm green_gradient cursor-pointer'>
                Edit
            </Link>
            <p className='font-inter text-sm orange_gradient cursor-pointer'
            onClick={()=>handleDelete(item._id)}
            >
                Delete
            </p>
          </div>
      )} 
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
        "rounded-2xl h-fit w-fit min-w-[250px] min-h-[150px] md:min-w-[400px] md:min-h-[250px] overflow-hidden bg-black hover:bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 flex flex-col justify-between relative z-20",
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
