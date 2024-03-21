import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-purple" : '#53389E',
        'purple-secondary': '#7F56D9',
        'purple-tertiary' : '#6941C6',
        'white-secondary' : '#E9D7FE',
        'black-primary' : '#101828',
        'text-secondary' : '#475467',
        
      },
    },
  },
  plugins: [],
};
export default config;
