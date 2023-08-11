import BlobAndFlower from "./components/sections/BlobAndFlower";
import FadedImages from "./components/sections/FadedImages";
import ImagesSection from "./components/sections/ImagesSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <h1 className="text-xl font-bold mt-20 mb-20">Cool React Animation</h1>
      <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-4 gap-10">
        <div className="col-span-4">
          <FadedImages />
        </div>
        <div className="col-span-4">
          <BlobAndFlower />
        </div>

        <div className="col-span-4">
          <ImagesSection />
        </div>

        {/* <div>
          <p className="text-lg text-center animate-pulse">❤️</p>
        </div> */}
      </div>
      {/* added below so overflow absolute don't cause scrollable */}
      {/* https://stackoverflow.com/questions/64344836/absolutely-positioned-elements-adding-scroll-on-mobile */}
      <meta name="viewport" content="initial-scale=1.0, user-scalable=0" />
    </main>
  );
}
