/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import React from "react";
import SectionWrapper from "../wrappers/SectionWrapper";
import AnimateBlob from "../AnimateBlob";
import FireshipBlob56 from "../svg/FireshipBlob56";
import FireshipBlob34 from "../svg/FireshipBlob34";
import FireshipBlob78 from "../svg/FireshipBlob78";

interface Props {}

const COLORS = ["bg-[#fff4e9]", "bg-[#ffd2d2]", "bg-[#e2a688]", "bg-[#7d563f]"];
const DressCodeSection = ({}: Props) => {
  return (
    <SectionWrapper className="mx-8 relative w-screen h-[80vh] md:h-[60vh] flex items-center justify-center">
      <div>
        <h2 className="heading2 text-center">Dress Code</h2>
        <p className="text-center font-[Montserrat]">Any colors you like </p>
        <p className="text-center font-[Montserrat]">OR</p>
        <div className="flex gap-4 mt-8">
          {COLORS.map((bgColor, index) => (
            <div
              className={clsx(
                "w-16 h-16 md:w-20 md:h-20 rounded-full ring-solid ring-2 ring-offset-2 ring-primary",
                bgColor
              )}
              key={`color-${index}`}
            />
          ))}
        </div>
      </div>

      {/* <img
          alt="pink roses frame"
          src="/images/floral-pink-bottom-left.webp"
          className="w-[200px] md:w-[400px] absolute z-10 left-0 bottom-0 opacity-40"
        />
        <img
          alt="pink roses frame"
          src="/images/floral-pink-top-right.webp"
          className="w-[200px] md:w-[400px] absolute z-10 right-0 top-0 opacity-40"
        /> */}

      <AnimateBlob
        blobId1="#blob7"
        blobId2="#blob8"
        image={
          <div className="translate-x-[calc(8%-10px)] translate-y-1/3 absolute z-10 top-0 right-0 ">
            <img
              alt="flower"
              src="/images/flower-3.svg"
              className="h-[100px] md:h-[150px] animate-wiggle"
            />
          </div>
        }
        blob={
          <FireshipBlob78 className="w-60 h-60 md:w-80 md:h-80 absolute top-0 right-0 z-0  translate-x-[calc(50%-30px)] -translate-y-1/4" />
        }
      />

      <AnimateBlob
        blobId1="#blob5"
        blobId2="#blob6"
        image={
          <div className="-translate-x-2 -translate-y-1/3 absolute z-10 bottom-0 left-0 ">
            <img
              alt="flower"
              src="/images/flower-4.svg"
              className="h-[100px] md:h-[150px] animate-wiggle"
            />
          </div>
        }
        blob={
          <FireshipBlob56 className="w-60 h-60 md:w-80 md:h-80 absolute bottom-0 left-0 z-0  -translate-x-[calc(30%)] translate-y-1/4" />
        }
      />
    </SectionWrapper>
  );
};
export default DressCodeSection;
