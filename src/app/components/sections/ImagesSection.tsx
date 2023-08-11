import React from "react";
import SectionWrapper from "../wrappers/SectionWrapper";
import ImageSlider from "../ImageSlider";

interface Props {}

const ImagesSection = ({}: Props) => {
  return (
    <SectionWrapper className="py-20">
      <h1 className="text-xl font-bold mt-20 mb-20 text-center">Slider</h1>
      <ImageSlider />
    </SectionWrapper>
  );
};
export default ImagesSection;
