<template>
  <section class="rich-text-section">
    <SectionHeader :title="section.title" />
    <div v-html="section.html"></div>
  </section>
</template>

<script lang="ts" setup>

import SectionHeader from "~/components/SectionHeader.vue";

defineProps<{
  section: ResumeRichTextSection
}>()
</script>

<style lang="less" scoped>
.rich-text-section {
  padding: 16px 16px 24px;

  :deep(ul) {

    li {
      position: relative;
      margin-bottom: 8px;
      padding-left: 20px;
      line-height: 30px;

      &::before {
        content: "";
        position: absolute;
        left: 0.4em;
        top: 0.8em;
        width: 4px;
        height: 4px;
        background-color: var(--color-primary);
        border-radius: 50%;
      }
    }
  }
  :deep(strong) {
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    color: var(--color-text-emphasis);
    margin: 0 1px;
    padding: 0 3px;
    border-bottom: 1px solid var(--color-chip-border);
    box-shadow: inset 0 -8px var(--color-chip-bg);
  }
}
</style>