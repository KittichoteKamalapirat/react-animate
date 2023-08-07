import DateTimeSection from "./components/sections/DateTimeSection";
import FormSection from "./components/sections/FormSection";
import HeaderSection from "./components/sections/HeaderSection";
import ImagesSection from "./components/sections/ImagesSection";
import InviteSection from "./components/sections/InviteSection";
import LocationSection from "./components/sections/LocationSection";
import VideoSection from "./components/sections/VideoSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeaderSection />
      <InviteSection />
      <VideoSection />
      <LocationSection />
      <DateTimeSection />
      <ImagesSection />

      <div>
        <h3>Theme</h3>
      </div>
      <FormSection />
    </main>
  );
}
