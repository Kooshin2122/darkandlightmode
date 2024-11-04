/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const plugin = require("tailwindcss/plugin");
//
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ":root": {
          "--background": "0 0% 96%" /* white */,
          "--foreground": "222.2 84% 4.9%" /* dark text */,
          "--card": "0 0% 100%" /* white */,
          "--card-foreground": "222.2 84% 4.9%" /* dark text */,
          "--popover": "0 0% 100%" /* white */,
          "--popover-foreground": "222.2 84% 4.9%" /* dark text */,
          "--primary": "338 78% 75%" /* WhatsApp green */,
          "--primary-foreground": "210 40% 98%" /* light text */,
          "--secondary": "210 16% 90%" /* light gray */,
          "--secondary-foreground": "222.2 47.4% 11.2%" /* medium dark gray */,
          "--muted": "210 40% 96.1%" /* very light gray */,
          "--muted-foreground": "215.4 16.3% 46.9%" /* medium gray */,
          "--accent": "152 78% 46%" /* WhatsApp green */,
          "--accent-foreground": "210 40% 98%" /* light text */,
          "--destructive": "0 84.2% 60.2%" /* red */,
          "--destructive-foreground": "210 40% 98%" /* light text */,
          "--border": "210 16% 90%" /* light gray */,
          "--input": "0 0% 100%" /* white */,
          "--ring": "152 78% 46%" /* WhatsApp green */,
          "--radius": "0.5rem",
        },
        ".dark": {
          "--background": "0 0% 0%" /* dark blue-gray */,
          "--foreground": "210 40% 98%" /* light text */,
          "--card": "0 0% 11%" /* dark blue-gray */,
          "--card-foreground": "210 40% 98%" /* light text */,
          "--popover": "210 28% 9%" /* dark blue-gray */,
          "--popover-foreground": "210 40% 98%" /* light text */,
          "--primary": "160 60% 45%" /* teal */,
          "--primary-foreground": "222.2 47.4% 11.2%" /* dark text */,
          "--secondary": "215 16% 18%" /* dark gray */,
          "--secondary-foreground": "210 40% 98%" /* light text */,
          "--muted": "217 32% 16%" /* very dark gray */,
          "--muted-foreground": "215.4 16.3% 46.9%" /* medium gray */,
          "--accent": "160 60% 45%" /* teal */,
          "--accent-foreground": "210 40% 98%" /* light text */,
          "--destructive": "0 62.8% 30.6%" /* dark red */,
          "--destructive-foreground": "210 40% 98%" /* light text */,
          "--border": "0 0% 23%" /* very dark gray */,
          "--input": "0 0% 17%" /* very dark gray */,
          "--ring": "160 60% 45%" /* teal */,
          "--radius": "0.5rem",
        },
      });
    }),
  ],
};
