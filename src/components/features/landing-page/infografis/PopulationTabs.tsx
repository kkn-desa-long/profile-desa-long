"use client";

import PopulationSection from "./PopulationSection";
import HamletSection from "./HamletSection";
import AgeSection from "./AgeSection";
import EducationSection from "./EducationSection";
import JobSection from "./JobSection";
import MarriageSection from "./MarriageSection";
import TribeSection from "./TribeSection";

export default function PopulationTabs() {
  return (
    <>
      <PopulationSection />
      <HamletSection />
      <MarriageSection />
      <AgeSection />
      <EducationSection />
      <JobSection />
      <TribeSection />
      <p className="text-end">Juni, 2025</p>
    </>
  );
}
