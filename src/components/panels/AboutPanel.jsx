/**
 * AboutPanel — Organisation overview.
 * Describes GO COMMS mission and identity in a tactical briefing format.
 */
import React from "react";
import PanelFrame from "./PanelFrame";
import { Target, Crosshair, Eye } from "lucide-react";

const briefingItems = [
  {
    icon: Target,
    heading: "MISSION",
    text: "To provide unbreakable communications infrastructure for operations in contested, remote, and austere environments where failure is not an option.",
  },
  {
    icon: Crosshair,
    heading: "FOCUS",
    text: "We engineer, deploy, and maintain tactical communication systems that bridge the gap between command authority and field operators.",
  },
  {
    icon: Eye,
    heading: "VISION",
    text: "A world where no operator is ever out of contact. Where every team, in every environment, maintains persistent, secure connectivity.",
  },
];

export default function AboutPanel() {
  return (
    <PanelFrame id="about" designation="PANEL-01 // ABOUT" title="Operational Brief">
      <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-8 max-w-3xl">
        GO COMMS is a tactical communications outfit built from the ground up
        for professionals who operate beyond conventional infrastructure. We
        don&apos;t sell products — we deliver capability.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {briefingItems.map((item) => (
          <div
            key={item.heading}
            className="bg-secondary/50 border border-border p-5 hover:border-primary/50 transition-colors duration-300"
          >
            <item.icon className="w-5 h-5 text-primary mb-3" />
            <h3 className="font-heading text-sm tracking-[0.2em] uppercase text-accent mb-2">
              {item.heading}
            </h3>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </PanelFrame>
  );
}