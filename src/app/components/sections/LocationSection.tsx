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
    zoom: 14,
  };

  if (!process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY) return;
  return (
    <SectionWrapper className="bg-primary-100 w-screen py-16">
      <h2 className="heading2 text-center font-Montserrat">
        THE HALLS Bangkok
      </h2>
      <p className="text-center text-smmd mt-4 font-[Montserrat]">
        02-015-3765
      </p>
      <p className="text-center font-[Montserrat]">
        79, 1 Vibhavadi Rangsit 64 Alley <br /> Talat Bang Khen, Lak Si <br />
        Bangkok 10210
      </p>
      <div className="w-[300px] h-[250px] md:w-[500px] md:h-[400px] relative mx-auto mt-8">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY, // TODO
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
