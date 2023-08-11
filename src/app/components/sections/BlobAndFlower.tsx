/* eslint-disable @next/next/no-img-element */
import React from "react";
import SectionWrapper from "../wrappers/SectionWrapper";
import AnimateBlob from "../AnimateBlob";
import FireshipBlob12 from "../svg/FireshipBlob12";

interface Props {}

const BlobAndFlower = ({}: Props) => {
  return (
    <SectionWrapper className="flex items-center justify-center  py-20 md:py-20">
      <div className="relative rounded-md max-w-lg py-40 md:py-60 bg-white w-full text-xl text-gray-800 shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] mx-4">
        <div className="text-center">
          <p className="font-[SukhumvitSet]">
            Watch one of the most iconic animations from <br /> Studio Ghibli
          </p>
          <br />
          <p className="font-[SukhumvitSet]">featuring</p>
          <br />
          {/* center wrapper */}
          <div className="flex flex-col items-center">
            {/* actual card */}
            <div className="flex justify-space items-center gap-4">
              <div>
                <h1 className="font-[Tangerine] font-bold text-6xl md:text-8xl text-center">
                  Chihiro
                </h1>
                <p className="font-[SukhumvitSet] font-medium text-sm md:text-lg">
                  The Kawaii Girl
                </p>
              </div>
              <p className="font-[Tangerine] font-bold text-4xl md:text-6xl text-center">
                &
              </p>
              <div>
                <h1 className="font-[Tangerine] font-bold text-6xl md:text-8xl text-center">
                  Haku
                </h1>
                <p className="font-[SukhumvitSet] font-medium text-sm md:text-lg">
                  The Dradon
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <AnimateBlob
            image={
              <div className="translate-x-[calc(8%-10px)] translate-y-1/3 absolute z-10 bottom-0 right-0 ">
                <img
                  alt="flower"
                  src="/images/flower-1.svg"
                  className="h-[100px] md:h-[150px] animate-wiggle"
                />
              </div>
            }
            blobId1="#blob1"
            blobId2="#blob2"
            blob={
              <FireshipBlob12 className="w-40 h-40 md:w-60 md:h-60 absolute bottom-0 right-0 z-0  translate-x-[calc(50%-30px)] translate-y-1/2" />
            }
          />
        </div>
      </div>
    </SectionWrapper>
  );
};
export default BlobAndFlower;
