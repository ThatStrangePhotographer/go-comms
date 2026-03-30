@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Tactical Dark Theme */
    --background: 0 0% 4%;
    --foreground: 40 20% 85%;
    --card: 0 0% 10%;
    --card-foreground: 40 20% 85%;
    --popover: 0 0% 8%;
    --popover-foreground: 40 20% 85%;
    --primary: 86 41% 30%;
    --primary-foreground: 40 30% 90%;
    --secondary: 0 0% 13%;
    --secondary-foreground: 40 20% 75%;
    --muted: 0 0% 15%;
    --muted-foreground: 40 10% 50%;
    --accent: 40 33% 56%;
    --accent-foreground: 0 0% 4%;
    --destructive: 0 70% 45%;
    --destructive-foreground: 0 0% 98%;
    --border: 86 20% 20%;
    --input: 0 0% 18%;
    --ring: 86 41% 30%;
    --chart-1: 86 41% 30%;
    --chart-2: 40 33% 56%;
    --chart-3: 0 0% 40%;
    --chart-4: 86 30% 45%;
    --chart-5: 40 20% 70%;
    --radius: 0.25rem;

    /* Custom tactical tokens */
    --font-mono: 'JetBrains Mono', monospace;
    --font-heading: 'Oswald', sans-serif;
    --tactical-glow: 86 41% 30%;
    --panel-ridge: 0 0% 18%;
    --panel-inset: 0 0% 6%;

    --sidebar-background: 0 0% 6%;
    --sidebar-foreground: 40 20% 85%;
    --sidebar-primary: 86 41% 30%;
    --sidebar-primary-foreground: 40 30% 90%;
    --sidebar-accent: 0 0% 13%;
    --sidebar-accent-foreground: 40 20% 85%;
    --sidebar-border: 86 20% 20%;
    --sidebar-ring: 86 41% 30%;
  }

  .dark {
    --background: 0 0% 4%;
    --foreground: 40 20% 85%;
    --card: 0 0% 10%;
    --card-foreground: 40 20% 85%;
    --popover: 0 0% 8%;
    --popover-foreground: 40 20% 85%;
    --primary: 86 41% 30%;
    --primary-foreground: 40 30% 90%;
    --secondary: 0 0% 13%;
    --secondary-foreground: 40 20% 75%;
    --muted: 0 0% 15%;
    --muted-foreground: 40 10% 50%;
    --accent: 40 33% 56%;
    --accent-foreground: 0 0% 4%;
    --destructive: 0 70% 45%;
    --destructive-foreground: 0 0% 98%;
    --border: 86 20% 20%;
    --input: 0 0% 18%;
    --ring: 86 41% 30%;
    --chart-1: 86 41% 30%;
    --chart-2: 40 33% 56%;
    --chart-3: 0 0% 40%;
    --chart-4: 86 30% 45%;
    --chart-5: 40 20% 70%;
    --sidebar-background: 0 0% 6%;
    --sidebar-foreground: 40 20% 85%;
    --sidebar-primary: 86 41% 30%;
    --sidebar-primary-foreground: 40 30% 90%;
    --sidebar-accent: 0 0% 13%;
    --sidebar-accent-foreground: 40 20% 85%;
    --sidebar-border: 86 20% 20%;
    --sidebar-ring: 86 41% 30%;
  }
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
    font-family: var(--font-mono);
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: hsl(0 0% 6%);
  }
  ::-webkit-scrollbar-thumb {
    background: hsl(86 41% 30%);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: hsl(40 33% 56%);
  }
}

@layer utilities {
  /* Tactical scan line overlay */
  .scanlines::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.03) 2px,
      rgba(0, 0, 0, 0.03) 4px
    );
    pointer-events: none;
    z-index: 1;
  }

  /* Panel ridge effect */
  .panel-ridge {
    box-shadow:
      inset 0 1px 0 0 hsl(0 0% 20%),
      inset 0 -1px 0 0 hsl(0 0% 5%),
      0 0 0 1px hsl(0 0% 8%);
  }

  /* Tactical glow on hover */
  .tactical-glow {
    transition: box-shadow 0.3s ease, border-color 0.3s ease;
  }
  .tactical-glow:hover {
    box-shadow: 0 0 20px -5px hsla(86, 41%, 30%, 0.3);
    border-color: hsl(86 41% 30%);
  }
}