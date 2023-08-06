import RatioNextImage from "../RatioNextImage";

interface Props {}

const HeaderSection = ({}: Props) => {
  return (
    <div className="relative h-screen w-screen overflow-y-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Header"
        src="/images/front.webp"
        className="min-w-full min-h-full h-full absolute z-0 top-0 right-0 object-cover blur-lg"
      />
      <RatioNextImage
        alt="Header"
        src="/images/front.webp"
        className="w-[380px] absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-[Tangerine] text-white bg-black font-bold text-4xl text-center ">
          Fon & Job
        </h1>
        <h2 className="text-white bg-black text-xl text-center">19 Aug 2023</h2>
      </div>
    </div>
  );
};
export default HeaderSection;
