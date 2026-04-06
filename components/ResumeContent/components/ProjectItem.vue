<template>
  <article class="project-item">
    <header class="project-item__header">
      <h3 class="project-name">
        {{ entry.title }}
      </h3>
      <div v-if="entry.meta.length" class="project-role">
        <span
          v-for="(metaItem, index) in entry.meta"
          :key="`${entry.title}-${index}`"
          class="project-role__item"
          v-html="metaItem.html"
        />
      </div>
    </header>
    <div v-if="entry.content" class="project-item__content" v-html="entry.content">
    </div>
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  entry: ResumeEntry
}>()
</script>

<style lang="less" scoped>
.project-item {
  &__header {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 0 6px;

    @media screen and (max-width: 720px) {
      flex-direction: column;
    }
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
      top: 0.8em;
      width: 4px;
      height: 4px;
      background: var(--color-primary);
      border-radius: 50%;
      transform: translateY(50%);
    }
  }
}

.project-name {
  font-size: 14px;
  height: 22px;
  font-weight: 500;
  color: var(--color-text-emphasis);
  margin: 0 1px;
  padding: 0 3px;
  border-bottom: 1px solid var(--color-primary-soft-border);
  box-shadow: inset 0 -8px var(--color-primary-soft);
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
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;

  @media screen and (max-width: 720px) {
    justify-content: flex-start;
  }

  &__item {
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    color: var(--color-text-emphasis);
    margin: 0 1px;
    padding: 0 3px;
    border-bottom: 1px solid var(--color-chip-border);
    box-shadow: inset 0 -8px var(--color-chip-bg);

    :deep(a) {
      color: inherit;
    }
  }
}
</style>