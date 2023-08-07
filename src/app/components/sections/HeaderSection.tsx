"use client";
/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";

interface Props {}

const HeaderSection = ({}: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((index) => (index + 1 > 2 ? 0 : index + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-y-hidden">
      {/* {[...Array.from({ length: 6 })].map((_, i) => (
        <img
          key={`hero-image-${i}`}
          alt="Header"
          src={`/images/hero${imageIndex + 1}.webp`}
          className={clsx(
            "min-w-full min-h-full h-full absolute z-0 top-0 right-0 object-cover blur-lg"
          )}
        />
      ))} */}
      {/* bg */}
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

      <div className="absolute z-10 left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-[Tangerine] text-black bg-[rgba(255,255,255,0.4)] px-4 py-2 font-bold text-7xl text-center ">
          fon & Job
        </h1>
        <h2 className="text-white bg-[rgba(0,0,0,0.6)] text-xl text-center">
          19 Aug 2023
        </h2>
      </div>
    </div>
  );
};
export default HeaderSection;
