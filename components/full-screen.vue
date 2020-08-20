<template>
  <div class="component-full-screen">
    <div
      class="component-full-screen__wrapper"
      :style="{ minHeight: windowHeight }"
    >
      <div class="component-full-screen__inner">
        <div>
          <slot></slot>
        </div>
        <slot name="bottom"></slot>
      </div>
    </div>
    <slot name="outside"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowHeight: '100vh',
    }
  },
  created() {
    if (process.client) {
      /* eslint-disable-next-line */
      window.addEventListener('resize', this.onResize)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.windowHeight = `${window.innerHeight}px`
    },
  },
}
</script>

<style lang="scss">
.component-full-screen {
  display: flex;
  flex-direction: column;

  .component-full-screen__wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .component-full-screen__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    height: 100%;
  }
}
</style>
