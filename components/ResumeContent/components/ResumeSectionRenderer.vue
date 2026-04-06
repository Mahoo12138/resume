<template>
  <SkillSection
    v-if="section.kind === 'rich-text'"
    :section="section"
  />
  <ExperienceSection
    v-else-if="section.kind === 'grouped-entries'"
    :section="section"
  />
  <EntryListSection
    v-else
    :section="section"
  />
</template>

<script lang="ts" setup>
import EntryListSection from "~/components/ResumeContent/components/EntryListSection.vue";
import ExperienceSection from "~/components/ResumeContent/components/ExperienceSection.vue";
import SkillSection from "~/components/ResumeContent/components/SkillSection.vue";

defineProps<{
  section: ResumeSection
}>()
</script>