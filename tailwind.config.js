// See https://irian.to/blogs/setting-up-vuepress-with-tailwindcss/

// BRAND COLORS: https://coolors.co/ffffff-6c6c60-fbcd22-3f2680

module.exports = {
  mode: "jit", // for some reason did not work!

  corePlugins: { preflight: false },
  // See https://sebastiandedeyne.com/why-we-use-important-with-tailwind/
  important: "body", // Components in Markdown require this

  // Use more specific paths in your purge config.
  // See https://tailwindcss.com/docs/just-in-time-mode#watch-mode-and-one-off-builds
  purge: {
    content: [
      "./.vuepress/components/**/*.vue",
      "./.vuepress/lib/**/*.js",
      "./.vuepress/styles/**/*.*css",
      "./course/**/*.md",
    ],
  },

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        // Docs https://tailwindcss.com/docs/breakpoints#styling-for-print
        print: { raw: "print" },
      },
      colors: {
        indigo: {
          DEFAULT: "#3F2680",
          50: "#F1EDFA",
          100: "#DBD2F2",
          200: "#AE9BE1",
          300: "#8264D1",
          400: "#5A36B7",
          500: "#3F2680",
          600: "#372170",
          700: "#301D61",
          800: "#281851",
          900: "#201341",
        },
        yellow: {
          DEFAULT: "#FBCD22",
          50: "#FFFBED",
          100: "#FEF6D6",
          200: "#FDECA9",
          300: "#FDE17C",
          400: "#FCD74F",
          500: "#FBCD22",
          600: "#E1B204",
          700: "#AA8603",
          800: "#735B02",
          900: "#3C2F01",
        },
        green: {
          DEFAULT: "#19B873",
          50: "#D4F9E9",
          100: "#BCF6DD",
          200: "#8AEFC3",
          300: "#59E8AA",
          400: "#27E291",
          500: "#19B873",
          600: "#14905A",
          700: "#0E6740",
          800: "#093F27",
          900: "#03160E",
        },
        olive: {
          DEFAULT: "#5A5745",
          50: "#CAC8BA",
          100: "#BFBCAC",
          200: "#A9A58F",
          300: "#938E72",
          400: "#77735B",
          500: "#5A5745",
          600: "#4C493A",
          700: "#3D3B2F",
          800: "#2F2D24",
          900: "#201F19",
        },
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
