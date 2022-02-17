"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveExternalLinkIconPluginOptions = void 0;
/**
 * Resolve options for @vuepress/plugin-external-link-icon
 */
const resolveExternalLinkIconPluginOptions = (themePlugins, localeOptions) => {
    if ((themePlugins === null || themePlugins === void 0 ? void 0 : themePlugins.externalLinkIcon) === false) {
        return false;
    }
    return {
        locales: Object.entries(localeOptions.locales || {}).reduce((result, [key, value]) => {
            var _a;
            result[key] = {
                openInNewWindow: (_a = value.openInNewWindow) !== null && _a !== void 0 ? _a : localeOptions.openInNewWindow,
            };
            return result;
        }, {}),
    };
};
exports.resolveExternalLinkIconPluginOptions = resolveExternalLinkIconPluginOptions;
