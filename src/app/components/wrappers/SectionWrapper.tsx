import clsx from "clsx";
import React, { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface Props {
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ className = "", children }: Props) => {
  return (
    <section className={cn("mx-auto my-8", className)}>{children}</section>
  );
};
export default SectionWrapper;
