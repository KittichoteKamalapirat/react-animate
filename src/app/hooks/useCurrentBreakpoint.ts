import resolveConfig from "tailwindcss/resolveConfig";
import { useLayoutEffect, useState } from "react";
import tailwindConfig from "../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export const getBreakpointValue = (value: string): number =>
  Number(
    (fullConfig.theme as any).screens[value].slice(
      0,
      (fullConfig.theme as any).screens[value].indexOf("px")
    )
  );

export const useCurrentBreakpoint = (): string => {
  const [width, setWidth] = useState(0);

  let currentBreakpoint = "xs";
  let biggestBreakpointValue = 0;
  for (const breakpoint of Object.keys((fullConfig.theme as any).screens)) {
    const breakpointValue = getBreakpointValue(breakpoint);
    if (breakpointValue > biggestBreakpointValue && width >= breakpointValue) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint;
    }
  }

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return currentBreakpoint;
};
