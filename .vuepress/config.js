const { path } = require("@vuepress/utils");

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// DISABLE for PROD. Use webpack-bundle-analyzer
const isAnalyze = false;

module.exports = {
  lang: "en-US",
  title: "ValueHeads",
  description: "ValueHeads Free Value-Entrepreneurship Course and Community",
  head: [
    ["link", { rel: "icon", href: "/images/logo.png" }],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://www.googletagmanager.com",
        crossorigin: "",
      },
    ],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
        crossorigin: "",
      },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://www.google-analytics.com",
        crossorigin: "",
      },
    ],
    // see https://stackoverflow.com/a/60477207
    [
      "link",
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;800&display=swap",
        onload: "this.onload=null;this.rel='stylesheet'",
      },
    ],
  ],

  //   theme: path.resolve(__dirname, "./theme"),
  themeConfig: {
    logo: "/images/v.svg",
    domain: "https://valueheads.org",
    darkMode: false,
    themePlugins: {
      mediumZoom: false,
    },
  },

  plugins: [
    [
      path.resolve(__dirname, "./lib/vuepress-seo-plugin-v2.js"),
      {
        /* options */
      },
    ],

    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./components"),
      },
    ],

    // Docs: https://v2.vuepress.vuejs.org/reference/plugin/google-analytics.html
    [
      "@vuepress/plugin-google-analytics",
      {
        id: "G-BJE62W7VBG",
      },
    ],

    // Docs https://v1.vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html#usage
    [
      "@vuepress/medium-zoom",
      {
        // disable zoom. only for img with class zoom-img
        selector: "img.zoom-img",
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {},
      },
    ],
  ],

  alias: {
    "@": path.resolve(__dirname, "."),
  },

  extraWatchFiles: ["../tailwind.config.js"],

  // directives needs transformation https://github.com/vuejs/vue-next/issues/3298
  bundlerConfig: {
    // configureWebpack(config, isServer, isBuild) {
    //   if (!isBuild) return {};

    //   return {
    //     plugins: [
    //       // https://github.com/jantimon/html-webpack-plugin
    //       new HtmlWebpackPlugin(),
    //       new Critters({
    //         // optional configuration (see https://www.npmjs.com/package/critters-webpack-plugin)
    //       }),
    //     ],
    //   };
    // },

    chainWebpack(config) {
      // see https://github.com/mrbbot/vue-cli-plugin-webpack-bundle-analyzer
      if (isAnalyze)
        config
          .plugin("webpack-bundle-analyzer")
          .use(BundleAnalyzerPlugin)
          .init((Plugin) => new Plugin({ analyzerMode: "static" }));

      // Docs https://github.com/oliverfindl/vue-svg-inline-loader
      config.module
        .rule("vue")
        .use("vue-svg-inline-loader")
        .loader("vue-svg-inline-loader")
        .options({
          svgo: {
            plugins: [{ removeViewBox: false, removeStyleElement: true }],
          },
        });
    },
    vue: {
      compilerOptions: {
        directiveTransforms: {
          // v-scroll-to -> scroll-to (remove v-)
          "scroll-to": () => ({
            props: [],
            needRuntime: true, // <- remember this
          }),
        },
      },
    },
  },
};
