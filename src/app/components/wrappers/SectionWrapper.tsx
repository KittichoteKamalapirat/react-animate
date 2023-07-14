import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SectionWrapper = ({ children }: Props) => {
  return <section className="my-8 mx-auto">{children}</section>;
};
export default SectionWrapper;
