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
    line-height: 30px;
    :deep(p) {
      text-align: justify;
      word-break: break-all;
    }
    :deep(li) {
      position: relative;
      padding-left: 20px;
    }

    :deep(li)::before {
      content: '';
      position: absolute;
      left: 0.5em;
      top: 50%;
      width: 4px;
      height: 4px;
      background: #c7c7c7;
      border-radius: 50%;
      transform: translateY(50%);
    }
  }
}

.project-name {
  font-size: 14px;
  height: 22px;
  font-weight: 500;
  color: #474747;
  margin: 0 1px;
  padding: 0 3px;
  border-bottom: 1px solid #00aa7f8a;
  box-shadow: inset 0 -8px #00aa7f42;
  //position: relative;
  //text-indent: 20px;
  //
  //&::before {
  //  content: "";
  //  position: absolute;
  //  left: 0.5em;
  //  top: 50%;
  //  transform: translateY(-50%);
  //  width: 4px;
  //  height: 4px;
  //  background: #00b38a;
  //  border-radius: 50%;
  //}
}

.project-role {
  strong {
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