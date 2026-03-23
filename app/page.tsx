import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Details } from "@/components/sections/Details";
import { Gallery } from "@/components/sections/Gallery";
import { QRCodeSection } from "@/components/sections/QRCode";
import { RSVP } from "@/components/sections/RSVP";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Story />
      <Details />
      <Gallery />
      <QRCodeSection />
      <RSVP />
      <Footer />
    </main>
  );
}
