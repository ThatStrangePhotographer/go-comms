/**
 * HeroPanel — Primary branding panel.
 * Displays GO COMMS identity and tagline "Semper Connexi".
 * Features animated status indicators and a tactical grid background.
 */
import React from "react";
import { motion } from "framer-motion";
import { Radio, Shield, Wifi } from "lucide-react";

export default function HeroPanel() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Tactical grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(86 41% 30%) 1px, transparent 1px), linear-gradient(90deg, hsl(86 41% 30%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, hsl(0 0% 4%) 80%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Status bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center gap-6 mb-10"
        >
          <StatusIndicator icon={Shield} label="SECURE" />
          <StatusIndicator icon={Radio} label="ACTIVE" active />
          <StatusIndicator icon={Wifi} label="ONLINE" />
        </motion.div>

        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.15em] uppercase text-foreground mb-2">
            GO <span className="text-primary">COMMS</span>
          </h1>
          <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />
          <p className="font-heading text-lg sm:text-xl md:text-2xl tracking-[0.4em] uppercase text-accent">
            Semper Connexi
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 font-mono text-xs md:text-sm text-muted-foreground tracking-wider max-w-lg mx-auto"
        >
          TACTICAL COMMUNICATIONS &bull; FIELD OPERATIONS &bull; DEPLOYABLE SYSTEMS
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs tracking-[0.2em] uppercase border border-primary hover:bg-primary/80 transition-all duration-300"
          >
            <Radio className="w-3.5 h-3.5" />
            Request Briefing
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-foreground font-mono text-xs tracking-[0.2em] uppercase border border-border hover:border-primary hover:text-primary transition-all duration-300"
          >
            Intel Overview
          </a>
        </motion.div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}

function StatusIndicator({ icon: Icon, label, active }) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <div className="relative">
        <div
          className={`w-2 h-2 rounded-full ${
            active ? "bg-primary animate-pulse-glow" : "bg-muted-foreground/40"
          }`}
        />
      </div>
      <Icon className="w-3.5 h-3.5" />
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase">{label}</span>
    </div>
  );
}