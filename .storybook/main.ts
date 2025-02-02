import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
    "@storybook/addon-onboarding",
    "@storybook/addon-controls",
  ],

  core: {
    builder: "@storybook/builder-vite", // 👈 The builder enabled here.
  },

  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {},
      strictMode: true,
    },
  },

  viteFinal: async (config) => {
    const { mergeConfig } = await import("vite");

    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {},
    });
  },
};

export default config;
