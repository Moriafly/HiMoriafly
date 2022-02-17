"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveActiveHeaderLinksPluginOptions = void 0;
/**
 * Resolve options for @vuepress/plugin-active-header-links
 */
const resolveActiveHeaderLinksPluginOptions = (themePlugins) => {
    if ((themePlugins === null || themePlugins === void 0 ? void 0 : themePlugins.activeHeaderLinks) === false) {
        return false;
    }
    return {
        headerLinkSelector: 'a.sidebar-item',
        headerAnchorSelector: '.header-anchor',
        // should greater than page transition duration
        delay: 300,
    };
};
exports.resolveActiveHeaderLinksPluginOptions = resolveActiveHeaderLinksPluginOptions;
