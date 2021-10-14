// Docs https://v2.vuepress.vuejs.org/advanced/cookbook/usage-of-client-app-enhance.html
import { defineClientAppEnhance } from "@vuepress/client";
import "lazysizes";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  router.afterEach((to) => {
    // lazysizes docs: https://github.com/aFarkas/lazysizes
    lazySizes.init();
  });
});
