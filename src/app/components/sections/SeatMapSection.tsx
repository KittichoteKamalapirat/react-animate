"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SectionWrapper from "../wrappers/SectionWrapper";

interface Props {}

const SeatMapSection = ({}: Props) => {
  return (
    <SectionWrapper
      className="bg-white w-screen py-32 md:py-40 mx-2"
      id="seat-map"
    >
      <h2 className="heading2 text-center">Seat Map</h2>

      <LazyLoadImage
        src="/images/seat-map.webp"
        alt="slide_image"
        className="w-11/12 max-w-[400px] lg:max-w-[500px] mx-auto mt-8"
      />
    </SectionWrapper>
  );
};
export default SeatMapSection;
