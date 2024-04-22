import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}) => {

  let [hoveredIndex, setHoveredIndex] = useState(null);

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
                className="absolute inset-2 h-full bg-neutral-200 dark:bg-orange-600 block blur-lg rounded-2xl"
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
            <CardDescription>{item.prompt}</CardDescription>
            <div className="mt-[5vw]">
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
        "rounded-2xl h-full min-w-[25vw] overflow-hidden bg-black hover:bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
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
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
