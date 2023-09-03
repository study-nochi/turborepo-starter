import tailwindConfig from "tailwind-config/tailwind.config.js";

const config = {
  ...tailwindConfig,
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
export default config;
