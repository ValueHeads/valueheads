// Docs https://v2.vuepress.vuejs.org/advanced/cookbook/usage-of-client-app-enhance.html
import { defineClientAppEnhance } from "@vuepress/client";
import lazySizes from "lazysizes";
var VueScrollTo = require("vue-scrollto");

// Font Awesome Library
// See https://github.com/vuejs/vuepress/issues/2072
// Docs https://github.com/FortAwesome/vue-fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import {
  faGoogle,
  faTwitter,
  faLinkedin,
  faRedditAlien,
  faInstagram,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faGoogle,
  faTwitter,
  faLinkedin,
  faRedditAlien,
  faInstagram,
  faTiktok,
  faFacebook
);

import InlineSvg from "vue-inline-svg";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  if (!__VUEPRESS_SSR__)
    window.gtag = window.gtag
      ? window.gtag
      : () => {
          console.debug("gtag not loaded!");
        };

  // Docs https://github.com/FortAwesome/vue-fontawesome
  app.component("font-awesome-icon", FontAwesomeIcon);

  // Docs https://github.com/shrpne/vue-inline-svg
  app.component("inline-svg", InlineSvg);

  // Docs: https://github.com/rigor789/vue-scrollto
  app.use(VueScrollTo);

  router.afterEach((to) => {
    // lazysizes docs: https://github.com/aFarkas/lazysizes
    lazySizes.init();
  });
});
