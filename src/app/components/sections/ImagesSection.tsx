import React from "react";
import SectionWrapper from "../wrappers/SectionWrapper";
import ImageSlider from "../ImageSlider";

interface Props {}

const ImagesSection = ({}: Props) => {
  return (
    <SectionWrapper className="py-20">
      <ImageSlider />
    </SectionWrapper>
  );
};
export default ImagesSection;
