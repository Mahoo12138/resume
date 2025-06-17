<template>
  <section id="skill">
    <SectionHeader title="个人技能" />
    <div v-html="props.skills"></div>
  </section>
</template>

<script lang="ts" setup>

import SectionHeader from "~/components/SectionHeader.vue";

const props = defineProps<{
  skills?: string | null
}>()
</script>

<style lang="less" scoped>
@import '@/styles/vars.less';

#skill {
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
        background-color: @color-main;
        border-radius: 50%;
      }
    }
  }
  :deep(strong) {
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    color: #474747;
    margin: 0 1px;
    padding: 0 3px;
    border-bottom: 1px solid #eaeaea;
    box-shadow: inset 0 -8px #eaeaea;
  }
}
</style>