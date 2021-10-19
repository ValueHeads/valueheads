// Docs https://v2.vuepress.vuejs.org/advanced/cookbook/usage-of-client-app-enhance.html
import { defineClientAppEnhance } from "@vuepress/client";
import lazySizes from "lazysizes";

// Font Awesome Library
// See https://github.com/vuejs/vuepress/issues/2072
// Docs https://github.com/FortAwesome/vue-fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

library.add(faGoogle);

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("font-awesome-icon", FontAwesomeIcon);

  router.afterEach((to) => {
    // lazysizes docs: https://github.com/aFarkas/lazysizes
    lazySizes.init();
  });
});
