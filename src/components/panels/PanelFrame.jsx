/**
 * PanelFrame — Reusable tactical panel wrapper.
 * Every section on the site is wrapped in this component.
 * It provides the consistent "equipment panel" look: ridge borders,
 * designation label, and hover glow.
 *
 * Props:
 *   id          — HTML id for anchor linking
 *   designation — Small label in the top-left corner (e.g. "PANEL-01")
 *   title       — Optional heading rendered inside the panel
 *   className   — Additional classes
 *   children    — Panel content
 *   fullWidth   — If true, removes max-width constraint
 */
import React from "react";
import { motion } from "framer-motion";

export default function PanelFrame({
  id,
  designation,
  title,
  className = "",
  children,
  fullWidth = false,
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`
        relative bg-card border border-border 
        panel-ridge tactical-glow
        ${fullWidth ? "" : "max-w-6xl mx-auto"}
        ${className}
      `}
    >
      {/* Scanline overlay */}
      <div className="scanlines absolute inset-0 pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />

      {/* Designation label */}
      {designation && (
        <div className="absolute -top-3 left-4 bg-background px-2 py-0.5 border border-border">
          <span className="text-[10px] font-mono tracking-[0.3em] text-primary uppercase">
            {designation}
          </span>
        </div>
      )}

      {/* Panel content */}
      <div className="relative z-10 p-6 md:p-8">
        {title && (
          <h2 className="font-heading text-2xl md:text-3xl tracking-wider uppercase text-accent mb-6">
            {title}
          </h2>
        )}
        {children}
      </div>
    </motion.section>
  );
}