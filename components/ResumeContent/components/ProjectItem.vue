<template>
  <div class="project-item">
    <header class="project-item__header">
      <h3 class="project-name">
        <!--        <i class="icon icon-dot"></i>-->
        {{ data?.name }}
      </h3>
      <div class="project-role">
        <strong>{{ data?.role }}</strong>
      </div>
    </header>
    <div class="project-item__content" v-html="data?.content">
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = defineProps<{
  data?: Project
}>()
</script>

<style lang="less" scoped>
@import "@/styles/mixins.less";

.project-item {
  &__header {
    display: flex;
    justify-content: space-between;
    padding: 10px 0 6px;
  }

  &__content {
    :deep(p) {
      line-height: 28px;
      text-align: justify;
      word-break: break-all;
      margin-bottom: 3px;
    }
  }
}

.project-name {
  position: relative;
  padding-left: 12px;

  &::before {
    content: "";
    position: absolute;
    left: 0.5em;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    background: #00b38a;
    border-radius: 50%;
  }
}

.project-role {
  strong {
    .strong();
  }
}
</style>