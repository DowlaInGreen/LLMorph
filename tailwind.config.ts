import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          background: "#000000",
          text: "#ffffff",
          accent1: "#24c0cb",
          accent2: "#4de827"
        }
      },
      fontFamily: {
        // PHATT will be added later via local font; for now, title uses heading
        heading: ["var(--font-notable)", "sans-serif"],
        body: ["var(--font-montserrat)", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;
