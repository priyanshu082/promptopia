import { cn } from "@/utils/cn";
import clsx from "clsx";
import React from "react";

export const Meteors = ({
  number,
  className,
}) => {
  const meteors = new Array(number || 30).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-orange-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[100%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#df7b3d] before:to-transparent",
            className
          )}
          style={{
            top: 10,
            left: Math.floor(Math.random() * (40 - -40) + -50) + "vw",
            animationDelay: Math.random() * (0.2 ) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (50 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
