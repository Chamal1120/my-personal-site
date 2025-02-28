import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        /* Catppuccin Colors: 🌙 Mocha (Dark Mode) */
        "ctp-crust": { dark: "#11111B", DEFAULT: "#11111B", light: "#DCE0E8" },
        "ctp-mantle": { dark: "#181825", DEFAULT: "#181825", light: "#E6E9EF" },
        "ctp-base": { dark: "#1E1E2E", DEFAULT: "#1E1E2E", light: "#EFF1F5" },
        "ctp-surface0": {
          dark: "#313244",
          DEFAULT: "#313244",
          light: "#CCD0DA",
        },
        "ctp-surface1": {
          dark: "#45475A",
          DEFAULT: "#45475A",
          light: "#BCC0CC",
        },
        "ctp-surface2": {
          dark: "#585B70",
          DEFAULT: "#585B70",
          light: "#ACB0BE",
        },
        "ctp-text": { dark: "#CDD6F4", DEFAULT: "#CDD6F4", light: "#4C4F69" },
        "ctp-subtext0": {
          dark: "#A6ADC8",
          DEFAULT: "#A6ADC8",
          light: "#6C6F85",
        },
        "ctp-subtext1": {
          dark: "#BAC2DE",
          DEFAULT: "#BAC2DE",
          light: "#5C5F77",
        },
        "ctp-pink": { dark: "#F5C2E7", DEFAULT: "#F5C2E7", light: "#EA76CB" },
        "ctp-red": { dark: "#F38BA8", DEFAULT: "#F38BA8", light: "#D20F39" },
        "ctp-maroon": { dark: "#EBA0AC", DEFAULT: "#EBA0AC", light: "#E64553" },
        "ctp-yellow": { dark: "#F9E2AF", DEFAULT: "#F9E2AF", light: "#DF8E1D" },
        "ctp-green": { dark: "#A6E3A1", DEFAULT: "#A6E3A1", light: "#40A02B" },
        "ctp-blue": { dark: "#89B4FA", DEFAULT: "#89B4FA", light: "#1E66F5" },
        "ctp-teal": { dark: "#94E2D5", DEFAULT: "#94E2D5", light: "#179299" },
        "ctp-lavender": {
          dark: "#B4BEFE",
          DEFAULT: "#B4BEFE",
          light: "#7287FD",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
