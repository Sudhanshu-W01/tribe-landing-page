import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0E0F0C",
          light: "#1a1b17",
          dark: "#090a07",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A1A1AA",
          muted: "#71717A",
        }
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        nohemi300: ["NohemiLight", "sans-serif"],
        nohemi200: ["NohemiExtraLight", "sans-serif"],
        nohemi400: ["NohemiRegular", "sans-serif"],
        nohemi500: ["NohemiBold", "sans-serif"],
        nohemi600: ["NohemiExtraBold", "sans-serif"],
      },
      screens: {
        pixel: "0px",
        mobile: "479px",
        tablet: "768px",
        laptop: "1024px",
        mac: "1200px",
        desktop: "1440px",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'scroll': 'scroll 20s linear infinite'
      }
    },
  },
  plugins: [],
} satisfies Config;
