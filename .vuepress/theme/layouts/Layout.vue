<template>
  <div>
    <DiscontinuedNotice />

    <Layout class="relative">
      <template #page-bottom>
        <!-- <div class="my-footer">This is my custom page footer</div> -->
      </template>

      <template #page>
        <Content v-if="frontmatter.home" />
        <Transition v-else name="fade-slide-y" mode="out-in">
          <Page :key="page.path">
            <template #top>
              <slot name="page-top" />
            </template>
            <template #bottom>
              <slot name="page-bottom" />
            </template>
          </Page>
        </Transition>
      </template>

      <template #sidebar><div class="hidden"></div> </template>
    </Layout>
  </div>
</template>

<script>
// See Layout.vue at
// https://github.com/vuepress/vuepress-next/blob/a42e431a898240c67471a198fbde33c8805c2850/packages/%40vuepress/theme-default/src/client/layouts/Layout.vue
import Layout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import Page from "@vuepress/theme-default/lib/client/components/Page.vue";

import { usePageData, usePageFrontmatter } from "@vuepress/client";

export default {
  setup() {
    return {
      page: usePageData(),
      frontmatter: usePageFrontmatter(),
    };
  },
  components: {
    Layout,
    Page,
  },
};
</script>

<style lang="css"></style>
