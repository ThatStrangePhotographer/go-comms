/**
 * Home — Main landing page.
 * Assembles all tactical panels in sequence within the grid layout.
 * Panels can be freely rearranged by changing the order below.
 */
import React from "react";
import TacticalNav from "../components/layout/TacticalNav";
import HeroPanel from "../components/panels/HeroPanel";
import AboutPanel from "../components/panels/AboutPanel";
import ServicesPanel from "../components/panels/ServicesPanel";
import DeploymentPanel from "../components/panels/DeploymentPanel";
import WhoWeServePanel from "../components/panels/WhoWeServePanel";
import ContactPanel from "../components/panels/ContactPanel";
import FooterPanel from "../components/panels/FooterPanel";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <TacticalNav />

      {/* === PANEL ASSEMBLY === */}
      {/* Rearrange, add, or remove panels below to reconfigure the loadout. */}
      <main className="space-y-6 pb-6">
        <HeroPanel />
        <div className="px-4 md:px-6 space-y-6">
          <AboutPanel />
          <ServicesPanel />
          <DeploymentPanel />
          <WhoWeServePanel />
          <ContactPanel />
        </div>
      </main>

      <FooterPanel />
    </div>
  );
}