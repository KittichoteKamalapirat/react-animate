"use client";
/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { BsChevronDown } from "react-icons/bs";
import AnimateText from "../AnimateText";

const FadedImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const chevronColor = currentImageIndex === 0 ? "text-black" : "text-white";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((index) => (index + 1 > 2 ? 0 : index + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div>
        <img
          alt="Header Background 1"
          src={`/images/hero1.webp`}
          className={clsx(
            "min-w-full min-h-full h-full absolute z-0 top-0 right-0 object-cover blur-lg",
            "transition-opacity duration-[3000ms]",
            currentImageIndex === 0 ? "opacity-100" : "opacity-0"
          )}
        />
        <img
          alt="Header Background 2"
          src={`/images/hero2.webp`}
          className={clsx(
            "min-w-full min-h-full h-full absolute z-0 top-0 right-0 object-cover blur-lg",
            "transition-opacity duration-[3000ms]",
            currentImageIndex === 1 ? "opacity-100" : "opacity-0"
          )}
        />
        <img
          alt="Header Background 3"
          src={`/images/hero3.webp`}
          className={clsx(
            "min-w-full min-h-full h-full absolute z-0 top-0 right-0 object-cover blur-lg",
            "transition-opacity duration-[3000ms]",
            currentImageIndex === 2 ? "opacity-100" : "opacity-0"
          )}
        />

        {/* front */}
        <img
          key={`hero-image-1`}
          alt="Header"
          src={`/images/hero1.webp`}
          className={cn(
            "w-[800px] absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "transition-opacity duration-[3000ms] ",
            currentImageIndex === 0 ? "opacity-100" : "opacity-0"
          )}
        />

        <img
          key={`hero-image-2`}
          alt="Header"
          src={`/images/hero2.webp`}
          className={cn(
            "w-[800px] absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "transition-opacity duration-[3000ms] ",
            currentImageIndex === 1 ? "opacity-100" : "opacity-0"
          )}
        />

        <img
          key={`hero-image-3`}
          alt="Header"
          src={`/images/hero3.webp`}
          className={cn(
            "w-[800px] absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "transition-opacity duration-[3000ms] ",
            currentImageIndex === 2 ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      <div className="absolute z-10 left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2">
        <AnimateText />
      </div>

      <div
        className={clsx(
          "-translate-x-1/2 absolute bottom-1 left-1/2 transition-all duration-1000",
          chevronColor
        )}
      >
        <BsChevronDown
          // color={chevronColor}
          size={40}
          className="animate-bounce"
        />
      </div>
    </div>
  );
};
export default FadedImages;
