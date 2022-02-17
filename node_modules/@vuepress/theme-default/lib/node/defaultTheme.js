"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTheme = void 0;
const utils_1 = require("@vuepress/utils");
const utils_2 = require("./utils");
const defaultTheme = ({ themePlugins = {}, ...localeOptions }, app) => {
    if (app.options.bundler.endsWith('vite')) {
        // eslint-disable-next-line import/no-extraneous-dependencies
        app.options.bundlerConfig.viteOptions = require('vite').mergeConfig(app.options.bundlerConfig.viteOptions, {
            css: {
                preprocessorOptions: {
                    scss: { charset: false },
                },
            },
        });
    }
    (0, utils_2.assignDefaultLocaleOptions)(localeOptions);
    return {
        name: '@vuepress/theme-default',
        layouts: utils_1.path.resolve(__dirname, '../client/layouts'),
        templateBuild: utils_1.path.resolve(__dirname, '../../templates/index.build.html'),
        // use alias to make all components replaceable
        alias: Object.fromEntries(utils_1.fs
            .readdirSync(utils_1.path.resolve(__dirname, '../client/components'))
            .filter((file) => file.endsWith('.vue'))
            .map((file) => [
            `@theme/${file}`,
            utils_1.path.resolve(__dirname, '../client/components', file),
        ])),
        clientAppEnhanceFiles: utils_1.path.resolve(__dirname, '../client/clientAppEnhance.js'),
        clientAppSetupFiles: utils_1.path.resolve(__dirname, '../client/clientAppSetup.js'),
        extendsPage: (page) => {
            // save relative file path into page data to generate edit link
            page.data.filePathRelative = page.filePathRelative;
            // save title into route meta to generate navbar and sidebar
            page.routeMeta.title = page.title;
        },
        plugins: [
            [
                '@vuepress/active-header-links',
                (0, utils_2.resolveActiveHeaderLinksPluginOptions)(themePlugins),
            ],
            ['@vuepress/back-to-top', themePlugins.backToTop !== false],
            [
                '@vuepress/container',
                (0, utils_2.resolveContainerPluginOptions)(themePlugins, localeOptions, 'tip'),
            ],
            [
                '@vuepress/container',
                (0, utils_2.resolveContainerPluginOptions)(themePlugins, localeOptions, 'warning'),
            ],
            [
                '@vuepress/container',
                (0, utils_2.resolveContainerPluginOptions)(themePlugins, localeOptions, 'danger'),
            ],
            [
                '@vuepress/container',
                (0, utils_2.resolveContainerPluginOptionsForDetails)(themePlugins),
            ],
            [
                '@vuepress/container',
                (0, utils_2.resolveContainerPluginOptionsForCodeGroup)(themePlugins),
            ],
            [
                '@vuepress/container',
                (0, utils_2.resolveContainerPluginOptionsForCodeGroupItem)(themePlugins),
            ],
            [
                '@vuepress/external-link-icon',
                (0, utils_2.resolveExternalLinkIconPluginOptions)(themePlugins, localeOptions),
            ],
            ['@vuepress/git', (0, utils_2.resolveGitPluginOptions)(themePlugins, localeOptions)],
            ['@vuepress/medium-zoom', (0, utils_2.resolveMediumZoomPluginOptions)(themePlugins)],
            ['@vuepress/nprogress', themePlugins.nprogress !== false],
            ['@vuepress/palette', { preset: 'sass' }],
            ['@vuepress/prismjs', themePlugins.prismjs !== false],
            ['@vuepress/theme-data', { themeData: localeOptions }],
        ],
    };
};
exports.defaultTheme = defaultTheme;
