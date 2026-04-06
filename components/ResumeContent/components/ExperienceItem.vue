<template>
  <div class="group-block">
    <header class="experience-header">
      <div class="experience-header__left">
        <template v-for="(metaItem, index) in group.meta" :key="`${group.title}-${index}`">
          <span class="item-time" v-html="metaItem.html"></span>
        </template>
        <h3 class="item-name">{{ group.title }}</h3>
      </div>
    </header>
    <template v-for="entry in group.entries" :key="entry.title">
      <ProjectItem :entry="entry"/>
    </template>
  </div>
</template>

<script lang="ts" setup>

import ProjectItem from "~/components/ResumeContent/components/ProjectItem.vue";

defineProps<{
  group: ResumeGroup
}>()
</script>

<style lang="less" scoped>

.group-block {
  margin-bottom: 16px;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;

  &__left {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
    @media screen and (max-width: 720px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }
  }
}

.item-time {
  color: var(--color-text-subtle);
}
</style>