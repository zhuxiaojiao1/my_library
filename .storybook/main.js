module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    reactOptions: {
        strictMode: true,
    },
    addons: [
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
        "@storybook/addon-docs",
    ],
    core: {
        builder: "webpack5",
    },
    features: {
        babelModeV7: true,
        previewMdx2: true,
    },
    typescript: {
        check: true,
        checkOptions: {
            // eslint: {
            //     enabled: true,
            //     files: "./src/**/*.{tsx,ts}",
            // },
            // logger: {
            //     devServer: false,
            //     infrastructure: "console",
            //     issues: "console",
            // },
        },
    },
    //   webpackFinal: async (config, { configType }) => {
    //     config.module.rules.push({
    //       test: /\.(sa|sc)ss$/,
    //       use: ["style-loader", "css-loader", "sass-loader"],
    //     });
    //     return config;
    //   },
};