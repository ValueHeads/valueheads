const { path } = require("@vuepress/utils");

module.exports = ({ id }, context) => {
  return {
    name: "plugin-google-analytics",
    define: {
      __GA_ID__: id,
    },
    clientAppEnhanceFiles: path.resolve(__dirname, "./clientAppEnhance.js"),
  };
};
