const { path } = require("@vuepress/utils");

// DISABLE for PROD. Use webpack-bundle-analyzer
const isAnalyze = false;
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  lang: "en-US",
  title: "ValueHeads",
  description: "ValueHeads Free Value-Entrepreneurship Course",
  head: [
    // FAVICON https://realfavicongenerator.net/
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "safari-pinned-tab.svg", color: "#3f2680" },
    ],
    ["link", { rel: "shortcut icon", href: "favicon.ico" }],
    ["meta", { rel: "apple-mobile-web-app-title", content: "ValueHeads" }],
    ["meta", { rel: "msapplication-TileColor", content: "#3f2680" }],
    ["meta", { rel: "msapplication-config", content: "/browserconfig.xml" }],
    ["meta", { rel: "theme-color", content: "#3f2680" }],

    // PRECONNECT
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

    // PRELOAD
    [
      "link",
      {
        rel: "preload",
        as: "image",
        href: "/images/valueheads-logo.svg",
      },
    ],
    // see https://stackoverflow.com/a/60477207
    [
      "link",
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;800&display=swap",
        onload: "this.onload=null;this.rel='stylesheet'",
      },
    ],
  ],

  theme: path.resolve(__dirname, "./theme"),
  themeConfig: {
    logo: "/images/valueheads-logo.svg",
    domain: "https://valueheads.org",
    darkMode: false,
    themePlugins: {
      mediumZoom: false,
    },
    navbar: [
      // NavbarItem
      // {
      //   text: "Get Superpowers",
      //   link: "/#entrepreneurship-superpowers",
      // },
      // {
      //   text: "Ultimate Entrepreneurship Course",
      //   link: "/#entrepreneurship-course",
      // },
      // {
      //   text: "About",
      //   link: "/#about",
      // },
      // {
      //   text: "Help us get to 500 supporters",
      //   link: "/#cta",
      // },
      // NavbarGroup
      // {
      //   text: "Group",
      //   children: ["/group/foo.md", "/group/bar.md"],
      // },
    ],
  },

  plugins: [
    [
      path.resolve(__dirname, "./lib/vuepress-seo-plugin-v2/index.js"),
      {
        /* options */
      },
    ],

    // Docs: https://v2.vuepress.vuejs.org/reference/plugin/google-analytics.html
    // Modified locally
    [
      path.resolve(__dirname, "./lib/plugin-google-analytics/index.js"),
      {
        id: "G-BJE62W7VBG",
      },
    ],

    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./components"),
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
    "~": path.resolve(__dirname, "."),
  },

  extraWatchFiles: ["../tailwind.config.js"],

  // directives needs transformation https://github.com/vuejs/vue-next/issues/3298
  bundlerConfig: {
    chainWebpack(config) {
      // see https://github.com/mrbbot/vue-cli-plugin-webpack-bundle-analyzer
      if (isAnalyze)
        config
          .plugin("webpack-bundle-analyzer")
          .use(BundleAnalyzerPlugin)
          .init((Plugin) => new Plugin({ analyzerMode: "static" }));

      config.module
        .rule("vue")
        .use("vue-svg-inline-loader")
        .loader("vue-svg-inline-loader")
        .options({
          // inline: { strict: false },
          svgo: {
            plugins: [
              {
                removeViewBox: false,
                removeStyleElement: true,
              },
            ],
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
