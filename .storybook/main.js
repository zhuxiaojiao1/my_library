module.exports = {
    /** 组件文件的位置 */
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    reactOptions: {
        strictMode: true,
    },
    /** 使用的插件清单 */
    addons: [
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
        "@storybook/addon-docs",
    ],
    /** 配置storybook的内部功能 */
    core: {
        builder: "webpack5",
    },
    /** 启用storybook的附加功能 */
    features: {
        babelModeV7: true,
        previewMdx2: true,
    },
    /** 处理ts的配置 */
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
    /** 框架特定配置 */
    // framework: '@storybook/react',

    /** babel配置 */
    // babel: async (options) => ({
    //     ...options
    // })

    /** webpack配置 */
    // webpackFinal: async(config, { configType }) => {
    //     config.module.rules.push({
    //         test: /\.(sa|sc)ss$/,
    //         use: [
    //             "style-loader",
    //             {
    //                 loader: "css-loader",
    //                 options: {
    //                     importLoaders: 2,
    //                 },
    //             },
    //             "postcss-loader",
    //             "sass-loader",
    //         ],
    //     });
    //     return config;
    // },
};