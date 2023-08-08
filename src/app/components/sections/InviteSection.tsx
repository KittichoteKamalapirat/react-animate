/* eslint-disable @next/next/no-img-element */
import React from "react";
import SectionWrapper from "../wrappers/SectionWrapper";

interface Props {}

const InviteSection = ({}: Props) => {
  return (
    <SectionWrapper className="flex items-center justify-center w-screen py-20 md:py-20">
      <div className="relative rounded-md max-w-lg py-40 md:py-60 bg-white w-full text-xl text-gray-800 shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] mx-4">
        <div className="text-center">
          <p className="font-[SukhumvitSet]">
            มีความยินดีขอเรียนเชิญท่าน <br />{" "}
            เพื่อเป็นเกียรติเนื่องในพิธีฉลองมงคลสมรส
          </p>
          <br />
          <p className="font-[SukhumvitSet]">ระหว่าง</p>
          <br />
          {/* center wrapper */}
          <div className="flex flex-col items-center">
            {/* actual card */}
            <div className="flex justify-space items-center gap-4">
              <div>
                <h1 className="font-[Tangerine] font-bold text-6xl md:text-8xl text-center">
                  fon
                </h1>
                <p className="font-[SukhumvitSet] font-medium text-sm md:text-lg">
                  พญ. ธนิตา ลิ้มศิริ{" "}
                </p>
              </div>
              <p className="font-[Tangerine] font-bold text-4xl md:text-6xl text-center">
                &
              </p>
              <div>
                <h1 className="font-[Tangerine] font-bold text-6xl md:text-8xl text-center">
                  Job
                </h1>
                <p className="font-[SukhumvitSet] font-medium text-sm md:text-lg">
                  นพ. ธนโชติ กมลาภิรัตน์
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          alt="roses frame"
          src="/images/floral-pink-top-left.webp"
          className="w-[200px] md:w-[250px] absolute z-10 left-0 top-0 opacity-40"
        />
        <img
          alt="roses frame"
          src="/images/floral-pink-bottom-right.webp"
          className="w-[200px] md:w-[250px] absolute z-10 right-0 bottom-0 opacity-40"
        />
      </div>
    </SectionWrapper>
  );
};
export default InviteSection;
