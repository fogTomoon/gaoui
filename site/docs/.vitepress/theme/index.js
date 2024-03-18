// import DefaultTheme from "vitepress/theme";
// import gaoui from "@mrgaomin/gaoui";
// export default {
//   ...DefaultTheme,
//   enhanceApp: async ({ app }) => {
//     app.use(gaoui);
//   },
// };
import DefaultTheme from "vitepress/theme";
import easyest from "@mrgaomin/gaoui";
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(easyest);
  },
};
