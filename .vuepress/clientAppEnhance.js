// Docs https://v2.vuepress.vuejs.org/advanced/cookbook/usage-of-client-app-enhance.html
import { defineClientAppEnhance } from "@vuepress/client";
import lazySizes from "lazysizes";
import VueScrollTo from "vue-scrollto";

import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

// Font Awesome Library
// See https://github.com/vuejs/vuepress/issues/2072
// Docs https://github.com/FortAwesome/vue-fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faGoogle,
  faTwitter,
  faLinkedin,
  faRedditAlien,
  faInstagram,
  faTiktok,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faGoogle,
  faTwitter,
  faLinkedin,
  faRedditAlien,
  faInstagram,
  faTiktok,
  faFacebook,
  faGlobe,
  faGithub
);

export default defineClientAppEnhance(({ app, router, siteData }) => {
  if (!__VUEPRESS_SSR__)
    window.gtag = window.gtag
      ? window.gtag
      : () => {
          console.debug("gtag not loaded!");
        };

  // Docs https://github.com/FortAwesome/vue-fontawesome
  app.component("font-awesome-icon", FontAwesomeIcon);

  // Docs: https://github.com/rigor789/vue-scrollto
  app.use(VueScrollTo);
  // Docs: https://github.com/ankane/vue-chartkick
  app.use(VueChartkick);

  router.afterEach((to) => {
    // lazysizes docs: https://github.com/aFarkas/lazysizes
    lazySizes.init();
  });
});
