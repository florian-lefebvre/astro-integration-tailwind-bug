import type { Config } from "tailwindcss";

export default {
  content: [
    "./node_modules/integration/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
} satisfies Config;
