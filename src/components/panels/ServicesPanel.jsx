/**
 * ServicesPanel — Core service offerings.
 * Displays services as tactical capability modules.
 */
import React from "react";
import PanelFrame from "./PanelFrame";
import { Radio, Server, ShieldCheck, Satellite, Wrench, BookOpen } from "lucide-react";

const services = [
  {
    icon: Radio,
    name: "Tactical Comms Deployment",
    description: "Rapid deployment of encrypted radio and data networks for field operations. HF, VHF, UHF, and SATCOM capable.",
    status: "ACTIVE",
  },
  {
    icon: Server,
    name: "Mobile Command Nodes",
    description: "Self-contained command and control nodes with integrated power, computing, and communications in ruggedised cases.",
    status: "ACTIVE",
  },
  {
    icon: ShieldCheck,
    name: "COMSEC Solutions",
    description: "End-to-end communications security consulting, key management, and encrypted network architecture.",
    status: "ACTIVE",
  },
  {
    icon: Satellite,
    name: "SATCOM Integration",
    description: "Multi-band satellite communications integration for BLOS connectivity. LEO, MEO, and GEO constellations.",
    status: "ACTIVE",
  },
  {
    icon: Wrench,
    name: "Systems Maintenance",
    description: "Ongoing maintenance, repair, and lifecycle support for deployed communications infrastructure.",
    status: "STANDBY",
  },
  {
    icon: BookOpen,
    name: "Operator Training",
    description: "Comprehensive training programmes for communications operators, from basic to advanced tactical employment.",
    status: "ACTIVE",
  },
];

export default function ServicesPanel() {
  return (
    <PanelFrame id="services" designation="PANEL-02 // SERVICES" title="Capability Modules">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((svc) => (
          <div
            key={svc.name}
            className="group bg-muted/30 border border-border p-5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
          >
            {/* Status badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  svc.status === "ACTIVE" ? "bg-primary" : "bg-accent"
                }`}
              />
              <span className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground uppercase">
                {svc.status}
              </span>
            </div>

            <svc.icon className="w-5 h-5 text-primary mb-3 group-hover:text-accent transition-colors duration-300" />
            <h3 className="font-heading text-sm tracking-[0.15em] uppercase text-foreground mb-2">
              {svc.name}
            </h3>
            <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
              {svc.description}
            </p>

            {/* Bottom highlight on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        ))}
      </div>
    </PanelFrame>
  );
}