"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import RatioNextImage from "../RatioNextImage";

interface Props {}

const HeaderSection = ({}: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  console.log("imageIndex", imageIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      // 1,2

      setImageIndex((index) => (index + 1 > 2 ? 0 : index + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative h-screen w-screen overflow-y-hidden">
      <img
        alt="Header"
        src={`/images/hero${imageIndex + 1}.webp`}
        className="min-w-full min-h-full h-full absolute z-0 top-0 right-0 object-cover blur-lg"
      />

      <img
        alt="Header"
        src={`/images/hero${imageIndex + 1}.webp`}
        className="w-[800px] absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      {/* <RatioNextImage
        alt="Header"
        src="/images/front.webp"
        className="w-[40px] absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      /> */}

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
