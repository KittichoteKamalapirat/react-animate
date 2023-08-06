"use client";

import clsx from "clsx";
import NextImage from "next/image";
import { useRef, useState } from "react";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  borderRadius?: string;
  extraClass?: string;
  className?: string;
  imageClassName?: string;
}

const RatioNextImage = ({
  src,
  alt,
  className,
  imageClassName = "rounded-md",
}: Props) => {
  const [ratio, setRatio] = useState(16 / 9);
  const [width, setWidth] = useState(0);

  const imageRef = useRef<HTMLDivElement>(null);
  const paddingTop = width / ratio;

  return (
    <div
      className={clsx("relative w-full", className)}
      style={{
        paddingTop,
      }}
      ref={imageRef}
    >
      <NextImage
        src={src}
        alt={alt}
        onLoadingComplete={({ naturalWidth, naturalHeight }) => {
          imageRef?.current?.offsetWidth &&
            setWidth(imageRef?.current?.offsetWidth);
          setRatio(naturalWidth / naturalHeight);
        }}
        objectFit="contain"
        layout="fill"
        className={clsx(imageClassName, "top-0 left-0 h-full w-full ")}
      />
    </div>
  );
};
export default RatioNextImage;
