<template>
  <section id="experience">
    <SectionHeader title="工作经验" />
    <template v-for="item in experiences">
      <ExperienceItem :data="item"/>
    </template>
  </section>
</template>

<script lang="ts" setup>

import SectionHeader from "~/components/SectionHeader.vue";
import ExperienceItem from "~/components/ResumeContent/components/ExperienceItem.vue";

const props = defineProps<{
  experiences?: Experience[] | null
}>()
</script>

<style scoped>
#experience {
  margin: 16px 16px 24px;
  overflow: hidden;

}
</style>