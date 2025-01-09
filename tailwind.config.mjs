/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111827", // Dark gray for background
        foreground: "#F3F4F6", // Soft light gray for text
        card: {
          DEFAULT: "#1E293B", // Neutral dark shade
          foreground: "#E5E7EB", // Light gray for card content
        },
        popover: {
          DEFAULT: "#374151", // Slightly lighter dark gray
          foreground: "#D1D5DB", // Muted light gray
        },
        primary: {
          DEFAULT: "#2563eb", // Vibrant blue
          foreground: "#FFFFFF", // White for contrast
        },
        secondary: {
          DEFAULT: "#4B5563", // Cool gray
          foreground: "#E5E7EB", // Light gray
        },
        muted: {
          DEFAULT: "#6B7280", // Muted mid-gray
          foreground: "#9CA3AF", // Softer muted gray
        },
        accent: {
          DEFAULT: "#F59E0B", // Warm yellow accent
          foreground: "#1F2937", // Dark gray for contrast
        },
        destructive: {
          DEFAULT: "#DC2626", // Bright red for destructive actions
          foreground: "#FFFFFF", // White for high contrast
        },
        border: "#374151", // Neutral border gray
        input: "#1F2937", // Dark gray for input fields
        ring: "#2563eb", // Blue for focus rings
        chart: {
          1: "#2563eb", // Blue
          2: "#22C55E", // Green
          3: "#FACC15", // Yellow
          4: "#EF4444", // Red
          5: "#8B5CF6", // Purple
        },
        sidebar: {
          DEFAULT: "#111827", // Sidebar dark gray
          foreground: "#F3F4F6", // Soft light gray for text
          primary: "#2563eb", // Sidebar blue
          "primary-foreground": "#FFFFFF", // White for contrast
          accent: "#F59E0B", // Sidebar accent yellow
          "accent-foreground": "#1F2937", // Dark gray for contrast
          border: "#1E293B", // Sidebar border gray
          ring: "#2563eb", // Sidebar focus ring blue
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
