<template>
  <div class="resume-content">
    <SkillSection :skills="data?.skills" />
    <ExperienceSection :experiences="data?.experiences" />
  </div>
</template>

<script lang="ts" setup>
import SkillSection from './components/SkillSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';

const { data } = await useAsyncData(() => useDirectusRest<{ skills: string, experiences: [], last_updated: string; }>(readItems('r_content', {
  fields: [
    'skills',
    {
      experiences: ['name', 'time', 'status', { projects: ['name', 'role', 'content'] }]
    }
  ]
})))

const { contentTime } = useLastUpdated()

contentTime.value = data.value?.last_updated

</script>

<style>
.resume-content {
  min-height: 200px;
  padding: 16px 32px 32px;
  overflow: hidden;

  @media screen and (max-width: 720px) {
    padding: 16px 8px 32px;
  }
}
</style>