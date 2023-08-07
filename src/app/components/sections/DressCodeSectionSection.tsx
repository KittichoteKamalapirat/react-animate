import clsx from "clsx";
import React from "react";
import SectionWrapper from "../wrappers/SectionWrapper";

interface Props {}

const COLORS = ["bg-[#fff4e9]", "bg-[#ffd2d2]", "bg-[#e2a688]", "bg-[#7d563f]"];
const DressCodeSection = ({}: Props) => {
  return (
    <SectionWrapper className="mx-8">
      <div className="relative w-screen h-[50vh] flex items-center justify-center">
        <div>
          <h2 className="heading2 text-center">Dress Code</h2>
          <p className="text-center">Any colors you like </p>
          <p className="text-center">OR</p>
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

        <img
          alt="pink roses frame"
          src="/images/floral-pink-bottom-left.webp"
          className="w-[200px] md:w-[400px] absolute z-10 left-0 bottom-0 opacity-40"
        />
        <img
          alt="pink roses frame"
          src="/images/floral-pink-top-right.webp"
          className="w-[200px] md:w-[400px] absolute z-10 right-0 top-0 opacity-40"
        />
      </div>
    </SectionWrapper>
  );
};
export default DressCodeSection;
