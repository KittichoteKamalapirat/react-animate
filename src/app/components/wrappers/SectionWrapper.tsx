import { HTMLProps, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ className = "", children, ...rest }: Props) => {
  return (
    <section className={cn("mx-auto", className)} {...rest}>
      {children}
    </section>
  );
};
export default SectionWrapper;
