/**
 * WhoWeServePanel — Target audiences / clients.
 * Presented as operational sectors with classification-style labels.
 */
import React from "react";
import PanelFrame from "./PanelFrame";
import { Shield, Building2, Flame, Globe, Anchor, Truck } from "lucide-react";

const sectors = [
  {
    icon: Shield,
    sector: "Defence & Military",
    brief: "Armed forces, special operations, and defence contractors requiring secure, resilient tactical communications in contested environments.",
  },
  {
    icon: Building2,
    sector: "Government & Intelligence",
    brief: "Government agencies and intelligence organisations needing classified-capable communications infrastructure.",
  },
  {
    icon: Flame,
    sector: "Emergency Services",
    brief: "Fire, rescue, and disaster response teams operating in degraded communications environments.",
  },
  {
    icon: Globe,
    sector: "Humanitarian & NGO",
    brief: "Aid organisations deploying to austere environments where commercial infrastructure has been destroyed or never existed.",
  },
  {
    icon: Anchor,
    sector: "Maritime & Offshore",
    brief: "Naval, coast guard, and offshore energy operations requiring persistent communications beyond line-of-sight.",
  },
  {
    icon: Truck,
    sector: "Private Security",
    brief: "Private military and security companies requiring encrypted, mobile communications networks for asset protection operations.",
  },
];

export default function WhoWeServePanel() {
  return (
    <PanelFrame
      id="who-we-serve"
      designation="PANEL-04 // PERSONNEL"
      title="Who We Serve"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {sectors.map((s, i) => (
          <div
            key={s.sector}
            className="group flex gap-4 p-4 bg-secondary/30 border border-border hover:border-primary/40 transition-all duration-300"
          >
            {/* Index number */}
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-border bg-muted/40 text-accent font-heading text-sm">
              {String(i + 1).padStart(2, "0")}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <s.icon className="w-4 h-4 text-primary" />
                <h3 className="font-heading text-sm tracking-[0.15em] uppercase text-foreground">
                  {s.sector}
                </h3>
              </div>
              <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
                {s.brief}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PanelFrame>
  );
}