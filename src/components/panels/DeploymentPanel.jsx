/**
 * DeploymentPanel — Deployment capability specifications.
 * Styled as a technical spec sheet / readiness matrix.
 */
import React from "react";
import PanelFrame from "./PanelFrame";
import { motion } from "framer-motion";

const capabilities = [
  { label: "Deployment Readiness", value: 98, unit: "%" },
  { label: "Operational Range", value: 5000, unit: "km" },
  { label: "Network Uptime", value: 99.7, unit: "%" },
  { label: "Encryption Standard", value: "AES-256", unit: "" },
  { label: "Frequency Bands", value: "HF/VHF/UHF/SHF", unit: "" },
  { label: "Max Concurrent Nodes", value: 128, unit: "nodes" },
];

const environments = [
  "Arctic / Sub-Zero",
  "Desert / Extreme Heat",
  "Maritime / Littoral",
  "Urban / Dense",
  "Jungle / Tropical",
  "Mountain / High Altitude",
];

export default function DeploymentPanel() {
  return (
    <PanelFrame
      id="deployment"
      designation="PANEL-03 // DEPLOYMENT"
      title="Deployment Specifications"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Spec table */}
        <div>
          <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
            System Parameters
          </h3>
          <div className="space-y-1">
            {capabilities.map((cap, i) => (
              <div
                key={cap.label}
                className="flex items-center justify-between py-2.5 px-3 border-b border-border/50 hover:bg-muted/30 transition-colors"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {cap.label}
                </span>
                <span className="font-heading text-sm tracking-wider text-accent">
                  {typeof cap.value === "number" ? (
                    <CountUp value={cap.value} index={i} />
                  ) : (
                    cap.value
                  )}
                  {cap.unit && (
                    <span className="text-[10px] text-muted-foreground ml-1">
                      {cap.unit}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Environment matrix */}
        <div>
          <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Operational Environments
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {environments.map((env) => (
              <div
                key={env}
                className="flex items-center gap-3 bg-secondary/40 border border-border px-4 py-3 hover:border-primary/40 transition-colors"
              >
                <div className="w-2 h-2 bg-primary/80 rotate-45 flex-shrink-0" />
                <span className="font-mono text-[11px] text-foreground/80">{env}</span>
              </div>
            ))}
          </div>

          {/* Readiness bar */}
          <div className="mt-6 p-4 bg-muted/20 border border-border">
            <div className="flex justify-between mb-2">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                Global Readiness Status
              </span>
              <span className="font-heading text-sm text-primary">OPERATIONAL</span>
            </div>
            <div className="h-1.5 bg-muted rounded-sm overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "98%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                className="h-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </div>
        </div>
      </div>
    </PanelFrame>
  );
}

/**
 * Lightweight count-up for numeric stats.
 */
function CountUp({ value, index }) {
  const [display, setDisplay] = React.useState(0);
  const ref = React.useRef(null);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1200;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(
              Number.isInteger(value)
                ? Math.round(eased * value)
                : parseFloat((eased * value).toFixed(1))
            );
            if (progress < 1) requestAnimationFrame(step);
          };
          setTimeout(() => requestAnimationFrame(step), index * 100);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, index]);

  return <span ref={ref}>{display}</span>;
}