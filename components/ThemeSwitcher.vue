<template>
  <aside class="theme-switcher" :class="{ 'is-open': isOpen }">
    <transition name="theme-panel">
      <div v-if="isOpen" id="theme-switcher-panel" class="theme-switcher__panel">
        <p class="theme-switcher__title">简历主题</p>
        <div class="theme-switcher__options">
          <button
            v-for="item in themes"
            :key="item.id"
            type="button"
            class="theme-switcher__option"
            :class="{ 'is-active': theme === item.id }"
            @click="handleSelect(item.id)"
          >
            <span class="theme-switcher__swatches">
              <span
                v-for="swatch in item.swatches"
                :key="swatch"
                class="theme-switcher__swatch"
                :style="{ backgroundColor: swatch }"
              />
            </span>
            <span class="theme-switcher__meta">
              <strong>{{ item.label }}</strong>
              <small>{{ item.description }}</small>
            </span>
          </button>
        </div>
      </div>
    </transition>

    <button
      type="button"
      class="theme-switcher__toggle"
      :aria-expanded="isOpen"
      aria-controls="theme-switcher-panel"
      @click="isOpen = !isOpen"
    >
      <span class="theme-switcher__toggle-mark"></span>
      <span class="theme-switcher__toggle-copy">
        <strong>主题</strong>
        <small>{{ activeTheme.label }}</small>
      </span>
    </button>
  </aside>
</template>

<script setup lang="ts">
const { theme, themes, setTheme } = useResumeTheme()

const isOpen = ref(false)

const activeTheme = computed(() => {
  return themes.find((item) => item.id === theme.value) ?? themes[0]
})

const handleSelect = (themeId: string) => {
  setTheme(themeId)
  isOpen.value = false
}
</script>

<style lang="less" scoped>
.theme-switcher {
  position: fixed;
  z-index: 30;
  top: 50%;
  left: 50%;
  margin-left: 548px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 12px;

  @media screen and (max-width: 1200px) {
    left: auto;
    right: 16px;
    margin-left: 0;
  }

  @media screen and (max-width: 720px) {
    top: auto;
    right: 12px;
    bottom: 72px;
    transform: none;
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 10px;
  }

  &__toggle,
  &__option {
    border: none;
    cursor: pointer;
    font: inherit;
  }

  &__toggle {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    min-width: 120px;
    padding: 12px 14px;
    border-radius: 18px;
    background: var(--color-switcher-bg);
    border: 1px solid var(--color-switcher-border);
    color: var(--color-text-emphasis);
    box-shadow: 0 16px 40px var(--color-switcher-shadow);
    backdrop-filter: blur(16px);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

    &:hover {
      transform: translateX(-2px);
      border-color: var(--color-primary-soft-border);
      box-shadow: 0 18px 44px var(--color-switcher-shadow);
    }

    @media screen and (max-width: 720px) {
      min-width: 108px;

      &:hover {
        transform: none;
      }
    }
  }

  &__toggle-mark {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-section-bg) 100%);
    box-shadow: 0 0 0 3px var(--color-primary-soft);
  }

  &__toggle-copy {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.2;

    strong {
      font-size: 13px;
      font-weight: 600;
    }

    small {
      margin-top: 3px;
      font-size: 12px;
      color: var(--color-text-subtle);
    }
  }

  &__panel {
    width: 232px;
    padding: 16px;
    border-radius: 22px;
    border: 1px solid var(--color-switcher-border);
    background: var(--color-switcher-bg);
    box-shadow: 0 18px 48px var(--color-switcher-shadow);
    backdrop-filter: blur(16px);

    @media screen and (max-width: 720px) {
      width: min(82vw, 232px);
    }
  }

  &__title {
    margin: 0 0 12px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.14em;
    color: var(--color-text-subtle);
  }

  &__options {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__option {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 10px 12px;
    border-radius: 16px;
    background: transparent;
    color: var(--color-text);
    text-align: left;
    transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
    border: 1px solid transparent;

    &:hover {
      background-color: var(--color-section-bg);
      transform: translateX(-2px);
    }

    &.is-active {
      border-color: var(--color-primary-soft-border);
      background-color: var(--color-primary-soft);
    }
  }

  &__swatches {
    display: inline-flex;
    gap: 6px;
    flex-shrink: 0;
  }

  &__swatch {
    width: 14px;
    height: 14px;
    border-radius: 999px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.72);
  }

  &__meta {
    display: flex;
    flex-direction: column;
    min-width: 0;
    line-height: 1.2;

    strong {
      font-size: 13px;
      font-weight: 600;
      color: var(--color-text-emphasis);
    }

    small {
      margin-top: 4px;
      font-size: 12px;
      color: var(--color-text-subtle);
    }
  }
}

.theme-panel-enter-active,
.theme-panel-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.theme-panel-enter-from,
.theme-panel-leave-to {
  opacity: 0;
  transform: translateX(8px);
}

@media print {
  .theme-switcher {
    display: none;
  }
}
</style>