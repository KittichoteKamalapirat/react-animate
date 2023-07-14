import React from "react";
import SectionWrapper from "../wrappers/SectionWrapper";

interface Props {}

const VideoSection = ({}: Props) => {
  return (
    <SectionWrapper>
      <video src="/videos/placeholder.mov"></video>
    </SectionWrapper>
  );
};
export default VideoSection;
