// module.exports = {
//   stories: [
//     "../stories/**/*.stories.mdx",
//     "../stories/**/*.stories.@(js|jsx|ts|tsx)",
//   ],
//   addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
//   framework: "@storybook/react",
// };

const path = require("path");

module.exports = {
  stories: [
    "..//**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.alias = {
      "@cheeseburger/src": path.resolve(__dirname, "../src/"),
      "@cheeseburger/components": path.resolve(__dirname, "../src/components/"),
    };
    return config;
  },
};
