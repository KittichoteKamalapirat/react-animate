import DateTimeSection from "./components/sections/DateTimeSection";
import DressCodeSection from "./components/sections/DressCodeSectionSection";
import FooterSection from "./components/sections/FooterSection";
import HeaderSection from "./components/sections/HeaderSection";
import ImagesSection from "./components/sections/ImagesSection";
import InviteSection from "./components/sections/InviteSection";
import MapSection from "./components/sections/MapSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* added below so overflow absolute don't cause scrollable */}
      {/* https://stackoverflow.com/questions/64344836/absolutely-positioned-elements-adding-scroll-on-mobile */}
      <meta name="viewport" content="initial-scale=1.0, user-scalable=0" />
      <HeaderSection />
      <InviteSection />
      {/* <VideoSection /> */}
      <MapSection />
      <DateTimeSection />
      <ImagesSection />
      <DressCodeSection />

      {/* <FormSection /> */}
      <FooterSection />
    </main>
  );
}
