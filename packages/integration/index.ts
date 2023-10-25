import type { AstroIntegration } from "astro";
import tailwind from "@astrojs/tailwind";

export default function integration(): AstroIntegration {
  return {
    name: "integration",
    hooks: {
      "astro:config:setup": ({ injectRoute, updateConfig }) => {
        injectRoute({
          pattern: "/",
          entryPoint: "integration/pages/index.astro",
          prerender: false,
        });

        updateConfig({
          integrations: [
            tailwind({
              applyBaseStyles: false,
              configFile: "integration/tailwind",
            }),
          ],
        });
      },
    },
  };
}
