import React from "react";

import NextImage from "next/image";
import SectionWrapper from "../wrappers/SectionWrapper";

interface Props {}

const HeaderSection = ({}: Props) => {
  return (
    <SectionWrapper>
      <h1>Fon & Job</h1>
      <NextImage
        src="/images/placeholder.png"
        alt="Fon and Job"
        width={400}
        height={800}
      />
    </SectionWrapper>
  );
};
export default HeaderSection;
