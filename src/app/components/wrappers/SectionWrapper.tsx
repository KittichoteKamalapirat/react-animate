import clsx from "clsx";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ className = "", children }: Props) => {
  return (
    <section className={clsx("my-8 mx-auto", className)}>{children}</section>
  );
};
export default SectionWrapper;
