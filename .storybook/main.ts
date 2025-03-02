import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";

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

  previewHead: (head) => `
    ${head}
    ${'<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />'}
  `,

  // viteFinal: async (config) => ({
  //   ...config,
  //   plugins: [config.plugins, vanillaExtractPlugin()],
  //   resolve: {
  //     ...config.resolve,
  //     alias: {
  //       ...config.resolve?.alias,
  //       "~": path.resolve(__dirname, "../packages/vanilla-extract/src"),
  //     },
  //   },
  // }),
  viteFinal: async (config) => {
    const { mergeConfig } = await import("vite");

    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {},
    });
  },
};

export default config;
