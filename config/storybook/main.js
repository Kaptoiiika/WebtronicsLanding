const path = require("path")

module.exports = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
  ],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    const pathSrc = path.resolve(__dirname, "..", "..", "src")
    // config?.module?.rules?.push({
    //   test: /\.svg$/,
    //   use: ["@svgr/webpack"],
    // })
    config.resolve.extensions.push(".ts", ".tsx")

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": pathSrc,
    }
    config.module.rules.push({
      test: /\.css|sass|scss$/i,
      use: [
        "style-loader",
        {
          loader: "css-loader",
        },
        "sass-loader",
      ],
    })

    config.module.rules = config.module.rules.map((rule) => {
      if (rule === "...") return rule

      if (/svg/.test(rule.test)) {
        return { ...rule, exclude: /\.svg$/i }
      }

      return rule
    })
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}
