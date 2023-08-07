/* eslint-disable @next/next/no-img-element */
import React from "react";
import SectionWrapper from "../wrappers/SectionWrapper";

interface Props {}

const InviteSection = ({}: Props) => {
  return (
    <SectionWrapper className="flex items-center justify-center w-screen h-screen">
      <div className="relative rounded-md max-w-lg py-40 md:py-20 bg-white w-full text-xl text-gray-800 shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] mx-4">
        <p className="text-center">
          <p className="font-[EkkamaiNew] font-bold">
            มีความยินดีขอเรียนเชิญท่าน <br />{" "}
            เพื่อเป็นเกียรติเนื่องในพิธีฉลองมงคลสมรส
          </p>
          <br />
          <p className="font-[EkkamaiNew] font-bold">ระหว่าง</p>
          <br />
          {/* center wrapper */}
          <div className="flex flex-col items-center">
            {/* actual card */}
            <div className="flex justify-space items-center gap-4">
              <div>
                <h1 className="font-[Tangerine] font-bold text-6xl md:text-8xl text-center">
                  fon
                </h1>
                <p className="font-[EkkamaiNew] font-bold">
                  พญ. ธนิตา ลิ้มศิริ{" "}
                </p>
              </div>
              <p className="font-[Tangerine] font-bold text-6xl text-center">
                &
              </p>
              <div>
                <h1 className="font-[Tangerine] font-bold text-6xl md:text-8xl text-center">
                  Job
                </h1>
                <p className="font-[EkkamaiNew] font-bold">
                  นพ. ธนโชติ กมลาภิรัตน์
                </p>
              </div>
            </div>
          </div>
        </p>

        <img
          alt="roses frame"
          src="/images/roses-frame-left.webp"
          className="w-[200px] absolute z-10 left-0 top-0 opacity-40"
        />
        <img
          alt="roses frame"
          src="/images/roses-frame-right.webp"
          className="w-[200px] absolute z-10 right-0 bottom-0 opacity-40"
        />
      </div>
    </SectionWrapper>
  );
};
export default InviteSection;
