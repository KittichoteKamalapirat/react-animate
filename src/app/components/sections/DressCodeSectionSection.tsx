import clsx from "clsx";
import React from "react";
import SectionWrapper from "../wrappers/SectionWrapper";

interface Props {}

const COLORS = ["bg-[#fff4e9]", "bg-[#ffd2d2]", "bg-[#e2a688]", "bg-[#7d563f]"];
const DressCodeSection = ({}: Props) => {
  return (
    <SectionWrapper className="my-40 mx-8">
      <h2 className="text-xl text-center ">Dress Code</h2>
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
    </SectionWrapper>
  );
};
export default DressCodeSection;
