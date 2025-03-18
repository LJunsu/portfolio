"use client";

import Navigation from "@/components/navigation";
import Section from "@/components/section";
import { SectionProvider } from "@/lib/SectionContext";

export default function Home() {
  
  return (
    <SectionProvider>
      <div className="relative">
        <Navigation />
        <Section />
      </div>
    </SectionProvider>
  );
}