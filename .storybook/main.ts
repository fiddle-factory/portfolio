import path from "path";
import { createRequire } from "node:module";
import type { StorybookConfig } from "@storybook/react-vite";
import tsconfigPaths from "vite-tsconfig-paths";

const _require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    // Remove @tailwindcss/vite plugins loaded from vite.config.js
    // They intercept ALL .css files and break CSS in Storybook
    config.plugins = (config.plugins || []).filter((p) => {
      const name = p && typeof p === 'object' && 'name' in p ? (p as { name: string }).name : '';
      return !String(name).startsWith('@tailwindcss/vite');
    });

    // Use PostCSS-based Tailwind processing instead
    config.css = {
      postcss: {
        plugins: [(await import("@tailwindcss/postcss")).default],
      },
    };

    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "react": path.dirname(_require.resolve("react/package.json")),
      "react-dom": path.dirname(_require.resolve("react-dom/package.json")),
    };
    config.resolve.dedupe = ["react", "react-dom"];
    // Ensure JSX automatic runtime so story files don't need "import React"
    config.esbuild = {
      ...config.esbuild,
      jsx: "automatic",
      jsxImportSource: "react",
    };
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
    ];
    // Add vite-tsconfig-paths for path alias resolution
    config.plugins = [...(config.plugins || []), tsconfigPaths()];
    return config;
  },
};
export default config;
