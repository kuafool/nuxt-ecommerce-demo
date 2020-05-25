<template>
  <section class="component-style-guide-section">
    <h1 class="component-style-guide-section__title">
      <slot name="title">
        {{ title }}
      </slot>
    </h1>
    <div class="component-style-guide-section__content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.component-style-guide-section {
  .component-style-guide-section__title {
    text-align: center;
    border-bottom: 1px solid #000;
    padding-bottom: 16px;
    margin-top: 48px;
  }
  .component-style-guide-section__content {
    box-sizing: border-box;
    max-width: 375px;
    margin: 16px auto 0;
    padding: 0 16px;
  }
}
</style>
