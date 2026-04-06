<script setup lang="ts">
const { title } = defineProps<{title: string}>()
</script>

<template>
  <header class="section-header">
    <span class="section-title__left"></span>
    <h2 class="section-title">{{title}}</h2>
    <span class="section-title__right"></span>
  </header>
</template>

<style scoped>
.section-header {
  position: relative;
  margin: 4px auto 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.section-title__left,
.section-title__right {
  flex: 1;
  display: inline-flex;
  height: 0;
  border-top: 1px solid var(--color-section-line);
  vertical-align: middle;
}
.section-title {
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  padding: 0 32px;
  margin: 0 16px;
  border-radius: 32px;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  color: var(--color-text-emphasis);
  background-color: var(--color-section-bg);
}
</style>