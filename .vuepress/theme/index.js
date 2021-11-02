const { path } = require("@vuepress/utils");

module.exports = {
  name: "vuepress-theme-valueheads",
  extends: "@vuepress/theme-default",
  layouts: {
    Layout: path.resolve(__dirname, "layouts/Layout.vue"),
  },
  //   alias: {
  //     // replace the Navbar component
  //     "@vuepress/theme-default/Navbar.vue": path.resolve(
  //       __dirname,
  //       "components/EmptyComponent.vue"
  //     ),
  //   },
};
