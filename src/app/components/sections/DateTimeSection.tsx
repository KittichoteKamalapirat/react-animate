import React from "react";
import SectionWrapper from "../wrappers/SectionWrapper";

interface Props {}

const DateTimeSection = ({}: Props) => {
  return (
    <SectionWrapper>
      <div>
        <p className="text-3xl text-center">19 August 2023</p>
        <ul className="mt-8">
          <li className="grid grid-cols-2">
            <p className="col-span-1">12:00</p>
            <p className="col-span-1">Do something</p>
          </li>
          <li className="grid grid-cols-2">
            <p className="col-span-1">12:00</p>
            <p className="col-span-1">Do something else</p>
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
};
export default DateTimeSection;
