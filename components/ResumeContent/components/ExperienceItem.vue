<template>
    <header class="experience-header">
      <div class="experience-header__left">
        <span class="item-time">{{ data?.time }}</span>
        <h3 class="item-name">{{ data?.name }}</h3>
      </div>
      <a class="btn item-more" href="javascript:void(0);" target="_blank" title="工作">
        {{ data?.status }}
      </a>
    </header>
  <template v-for="item in projects">
    <ProjectItem :data="item"/>
  </template>
</template>

<script lang="ts" setup>

import ProjectItem from "~/components/ResumeContent/components/ProjectItem.vue";

const { data } = defineProps<{
  data?: Experience
}>()
const { projects = [] } = data || {}
</script>

<style lang="less" scoped>

.experience-header {
  display: flex;
  justify-content: space-between;

  &__left {
    display: flex;
    gap: 16px;
    @media screen and (max-width: 720px) {
      flex-direction: column;
      gap: 4px;
    }
  }
}
</style>