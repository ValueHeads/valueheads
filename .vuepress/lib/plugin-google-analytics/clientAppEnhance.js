// Docs https://v2.vuepress.vuejs.org/advanced/cookbook/usage-of-client-app-enhance.html
import { defineClientAppEnhance } from "@vuepress/client";

const id = __GA_ID__;

// Docs: https://v2.vuepress.vuejs.org/reference/plugin-api.html#extendspagedata
export default defineClientAppEnhance(({ app, router, siteData }) => {
  if (__VUEPRESS_SSR__) return;

  // avoid duplicated import
  if (window.dataLayer && window.gtag) {
    return;
  }

  // insert gtag `<script>` tag
  const gtagScript = document.createElement("script");
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  gtagScript.async = true;
  gtagScript.defer = true;

  setTimeout(() => {
    document.head.appendChild(gtagScript);

    // insert gtag snippet
    window.dataLayer = window.dataLayer || [];
    // the gtag function must use `arguments` object to forward parameters
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      dataLayer.push(arguments);
    };

    gtag("js", new Date());
    gtag("config", id);
  }, 2000);
});
