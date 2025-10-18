"use client";
import { BackgroundPattern } from "./BackgroundPattern";
import { ContactHero } from "./ContactHero";
import { ContactInfoSection } from "./ContactInfoSection";
import { OfficeLocationsSection } from "./OfficeLocationsSection";
import Map from "@/components/Map";

export const ContactClient = () => {
  return (
    <div className="relative overflow-hidden">
      <BackgroundPattern />
      <ContactHero />
      <ContactInfoSection />
      <OfficeLocationsSection />
      <Map />
    </div>
  );
};
