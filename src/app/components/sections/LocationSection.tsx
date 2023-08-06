"use client";

import GoogleMapReact from "google-map-react";
import { MdLocationPin } from "react-icons/md";
import SectionWrapper from "../wrappers/SectionWrapper";

const Pin = ({}: { lat: number; lng: number }) => (
  <MdLocationPin
    size={40}
    color="red"
    className="absolute -translate-x-1/2 -translate-y-full" // make sure the tip points to location
  />
);

const LocationSection = () => {
  const defaultProps = {
    center: {
      lat: 13.873904734916668,
      lng: 100.58171033296948,
    },
    zoom: 16,
  };

  return (
    <SectionWrapper>
      <h2 className="text-xl text-center">The Halls Bangkok</h2>
      <div className="w-[600px] h-[400px] relative">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.GOOGLE_MAP_KEY as string, // TODO
            version: "3.31",
          }}
          zoom={defaultProps.zoom}
          center={defaultProps.center}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Pin lat={13.873904734916668} lng={100.58171033296948} />
        </GoogleMapReact>
      </div>
    </SectionWrapper>
  );
};
export default LocationSection;
