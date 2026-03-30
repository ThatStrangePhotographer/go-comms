/**
 * ContactPanel — Contact / comms request form.
 * Styled as a tactical message composition interface.
 */
import React, { useState } from "react";
import PanelFrame from "./PanelFrame";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactPanel() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ callsign: "", freq: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Transmission received. Stand by for acknowledgement.");
  };

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <PanelFrame
      id="contact"
      designation="PANEL-05 // COMMS"
      title="Initiate Contact"
    >
      {submitted ? (
        <div className="text-center py-12">
          <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
          <p className="font-heading text-xl tracking-[0.15em] uppercase text-accent mb-2">
            Transmission Received
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Your message has been logged. An operator will respond within 24 hours.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1.5 block">
                Callsign / Name
              </label>
              <Input
                value={form.callsign}
                onChange={update("callsign")}
                placeholder="Enter your callsign"
                required
                className="bg-muted/30 border-border font-mono text-xs placeholder:text-muted-foreground/40 focus:border-primary"
              />
            </div>

            <div>
              <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1.5 block">
                Frequency / Email
              </label>
              <Input
                value={form.freq}
                onChange={update("freq")}
                placeholder="your@frequency.net"
                type="email"
                required
                className="bg-muted/30 border-border font-mono text-xs placeholder:text-muted-foreground/40 focus:border-primary"
              />
            </div>

            <div>
              <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1.5 block">
                Message Traffic
              </label>
              <Textarea
                value={form.message}
                onChange={update("message")}
                placeholder="Compose your message..."
                required
                rows={5}
                className="bg-muted/30 border-border font-mono text-xs placeholder:text-muted-foreground/40 focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-mono text-xs tracking-[0.2em] uppercase hover:bg-primary/80 transition-colors"
            >
              <Send className="w-3.5 h-3.5 mr-2" />
              Transmit Message
            </Button>
          </form>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="p-4 bg-muted/20 border border-border">
              <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Direct Lines
              </h3>
              <div className="space-y-2">
                <InfoRow label="PRIMARY" value="comms@gocomms.io" />
                <InfoRow label="SECURE" value="secure@gocomms.io" />
                <InfoRow label="PHONE" value="+44 (0) 000 000 0000" />
              </div>
            </div>

            <div className="p-4 bg-muted/20 border border-border">
              <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Operating Hours
              </h3>
              <div className="space-y-2">
                <InfoRow label="HQ" value="0800-1800 GMT" />
                <InfoRow label="SUPPORT" value="24/7/365" />
                <InfoRow label="RESPONSE" value="< 2 HRS" />
              </div>
            </div>
          </div>
        </div>
      )}
    </PanelFrame>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-1.5 border-b border-border/30">
      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
        {label}
      </span>
      <span className="font-mono text-xs text-foreground/80">{value}</span>
    </div>
  );
}