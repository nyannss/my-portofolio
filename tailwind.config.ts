import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        btn: "linear-gradient(180deg, #16CDD5 -20.31%, rgba(22, 205, 213, 0) 210.94%)",
      },
      colors: {
        primary: "#363F3F",
      },
      background: {},
    },
  },
  plugins: [],
};
export default config;
