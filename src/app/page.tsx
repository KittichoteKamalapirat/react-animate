import DateTimeSection from "./components/sections/DateTimeSection";
import DressCodeSection from "./components/sections/DressCodeSectionSection";
import FooterSection from "./components/sections/FooterSection";
import HeaderSection from "./components/sections/HeaderSection";
import ImagesSection from "./components/sections/ImagesSection";
import InviteSection from "./components/sections/InviteSection";
import LocationSection from "./components/sections/LocationSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeaderSection />
      <InviteSection />
      {/* <VideoSection /> */}
      <LocationSection />
      <DateTimeSection />
      <ImagesSection />
      <DressCodeSection />

      {/* <FormSection /> */}
      <FooterSection />
    </main>
  );
}
