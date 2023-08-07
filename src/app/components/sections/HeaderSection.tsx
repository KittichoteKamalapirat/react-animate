"use client";
/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";

interface Props {}

const AnimateText = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Apply animation class after a short delay to trigger animation after page load
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <div className="flex gap-2 font-[Tangerine] text-black px-4 py-2 font-bold text-5xl md:text-7xl text-center ">
        <h1
          className={clsx(
            "transition-all duration-[2000ms]",
            animate
              ? "translate-x-[0] opacity-100"
              : "-translate-x-[300px] opacity-0"
          )}
        >
          fon
        </h1>
        <h1
          className={clsx(
            "transition-all duration-[2000ms] delay-1000",
            animate ? "opacity-100" : "opacity-0"
          )}
        >
          &
        </h1>
        <h1
          className={clsx(
            "transition-all  duration-[2000ms]",
            animate
              ? "translate-x-[0] opacity-100"
              : "translate-x-[300px] opacity-0"
          )}
        >
          Job
        </h1>
      </div>
      <h2
        className={clsx(
          "transition-all duration-[2000ms] delay-[2000ms] text-xl text-center",
          animate ? "opacity-100" : "opacity-0"
        )}
      >
        19 Aug 2023
      </h2>
    </div>
  );
};
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
      {/* logo */}
      {/* <img
        alt="Logo"
        src={`/images/logo-jf.svg`}
        className={clsx(
          "absolute w-10 h-10 z-30 top-10 left-10",
          "transition-opacity duration-[3000ms]"
        )}
      /> */}

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
    </div>
  );
};
export default HeaderSection;
