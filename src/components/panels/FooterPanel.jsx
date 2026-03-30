/**
 * FooterPanel — Site footer with classification-style formatting.
 * Minimal, tactical, functional.
 */
import React from "react";
import { Radio } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Deployment", href: "#deployment" },
  { label: "Personnel", href: "#who-we-serve" },
  { label: "Contact", href: "#contact" },
];

export default function FooterPanel() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Radio className="w-4 h-4 text-primary" />
            <span className="font-heading text-lg tracking-[0.2em] uppercase text-foreground">
              GOLF OSCAR COMMUNICATION
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Classification bar */}
        <div className="mt-8 pt-4 border-t border-border/50 text-center">
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/60">
            &copy; {year} GOLF OSCAR COMMUNICATION &bull; ALL RIGHTS RESERVED &bull; UNCLASSIFIED // FOUO
          </p>
        </div>
      </div>
    </footer>
  );
}