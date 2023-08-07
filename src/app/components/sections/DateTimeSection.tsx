import React from "react";
import SectionWrapper from "../wrappers/SectionWrapper";

interface Props {}

const DateTimeSection = ({}: Props) => {
  return (
    <SectionWrapper className="py-12 bg-gray-100 w-screen">
      <div>
        <h2 className="heading2 text-center">19 August 2023</h2>
        <ul className="mt-8 md:w-[500px] mx-auto">
          <li className="grid grid-cols-2 ml-4">
            <p className="col-span1 ">12:00 - 13:00</p>
            <p className="col-span-1">พิธีสงฆ์ พิธีไหว้ผู้ใหญ่</p>
          </li>
          <li className="grid grid-cols-2 ml-4">
            <p className="col-span-1">18:00 - 21:00</p>
            <p className="col-span-1">งานเลี้ยงฉลอง</p>
          </li>

          <li className="grid grid-cols-2 ml-4">
            <p className="col-span-1">21:00 ~</p>
            <p className="col-span-1">After Party 🎉</p>
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
};
export default DateTimeSection;
