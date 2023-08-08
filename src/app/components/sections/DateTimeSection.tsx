/* eslint-disable @next/next/no-img-element */
import React from "react";
import SectionWrapper from "../wrappers/SectionWrapper";

interface Props {}

const DateTimeSection = ({}: Props) => {
  return (
    <SectionWrapper className="relative py-32 md:py-40 w-screen font-[SukhumvitSet]">
      <div className="ring-gray-300 ring-1 rounded-md px-4 py-20 w-fit mx-auto">
        <h2 className="heading2 text-center">⏱️ 19 August 2023 (Sat)</h2>
        <ul className="mt-8 md:w-[500px] mx-auto">
          <li className="grid grid-cols-2 ml-4">
            <p className="col-span1 font-[Montserrat]">13:00 - 15:30</p>
            <p className="col-span-1 font-[SukhumvitSet]">งานหมั้น</p>
          </li>
          <li className="grid grid-cols-2 ml-4">
            <p className="col-span-1 font-[Montserrat]">18:00 - 21:00</p>
            <p className="col-span-1">งานเลี้ยง</p>
          </li>

          <li className="grid grid-cols-2 ml-4">
            <p className="col-span-1 font-[Montserrat]">21:00 ~</p>
            <p className="col-span-1 font-[Montserrat]">After Party 🎉</p>
          </li>
        </ul>
      </div>

      <img
        alt="pink roses frame"
        src="/images/floral-pink-top-left.webp"
        className="w-[200px] md:w-[400px] absolute z-10 left-0 top-0 opacity-40"
      />
    </SectionWrapper>
  );
};
export default DateTimeSection;
