import clsx from "clsx";
import { useState, useEffect } from "react";

interface Props {
  heroTextColor: string;
}
const AnimateText = ({}: Props) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Apply animation class after a short delay to trigger animation after page load
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <div
        className={clsx(
          "flex gap-2  px-4 py-2 font-bold text-5xl md:text-7xl text-center "
        )}
      >
        <h1
          className={clsx(
            "transition-all duration-[2000ms] font-[Tangerine]",

            animate
              ? "translate-x-[0] opacity-100"
              : "-translate-x-[300px] opacity-0"
          )}
        >
          fon
        </h1>
        <h1
          className={clsx(
            "transition-all duration-[2000ms] font-[Tangerine] delay-1000",

            animate ? "opacity-100" : "opacity-0"
          )}
        >
          &
        </h1>
        <h1
          className={clsx(
            "transition-all duration-[2000ms] font-[Tangerine]",

            animate
              ? "translate-x-[0] opacity-100"
              : "translate-x-[300px] opacity-0"
          )}
        >
          Job
        </h1>
      </div>
      <h2
        className={clsx(
          "transition-all duration-[1000ms] delay-[2000ms] text-xl text-center font-[Montserrat]",
          animate ? "opacity-100" : "opacity-0"
          // heroTextColor
        )}
      >
        19 Aug 2023
      </h2>
    </div>
  );
};

export default AnimateText;
