/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chat: {
          background: '#202020',
          textColor: '#ffffff',
          inputOption: {
            color: '#d6d6d6',
            colorHover: '#a7a7a7',
            background: '#414141',
          },
        },
        heading: '#ffeaea',
        textarea: {
          border: '#4c4c4c',
          background: '#2c2c2c',
        },
        searchIcon: {
          color: '#fff',
          bg: '#2ea61d',
          bgHover: '#2c911f',
          bgDisabled: '#2c911f4d',
        },
        inputOption: {
          bg: '#2c2c2c',
          color: '#ffffff',
          iconBg: '#f2f2f2',
          iconColor: '#3a3a3a',
        },
        skeleton: {
          iconGradient:
            'linear-gradient(transparent 50%, rgb(39, 49, 63) 50%) 0% 0% / 18px 144px, linear-gradient(rgb(143, 168, 138), rgba(15, 170, 24, 0.39)) 0% 0% / 100% 44px',
          textGradient:
            'linear-gradient(transparent 50%, rgb(39, 49, 63) 50%) 0% 0% / 18px 20px, linear-gradient(rgb(143, 168, 138), rgba(15, 170, 24, 0.39)) 0% 0% / 100% 30px',
        },
        woodsmoke: {
          "50": "#f5f5f6",
          "100": "#e6e6e7",
          "200": "#cfd0d2",
          "300": "#aeafb2",
          "400": "#85868b",
          "500": "#6a6b70",
          "600": "#5a5b60",
          "700": "#1F1F22",
          "800": "#444546",
          "900": "#3b3b3e",
          "950": "#141415",
        },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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