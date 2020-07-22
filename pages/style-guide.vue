<template>
  <div class="page-style-guide">
    <style-guide-section>
      <template #title>
        Responsive
      </template>
      <div class="layout-mobile-only">Mobile</div>
      <div class="layout-tablet-only">Tablet</div>
      <div class="layout-desktop-only">Desktop</div>
      <div class="layout-large-desktop-only">Large Desktop</div>
    </style-guide-section>
    <style-guide-section>
      <template #title>
        Loading
      </template>
      <loading-spinner :width="48"></loading-spinner>
      <loading-spinner :width="40"></loading-spinner>
      <loading-spinner></loading-spinner>
      <loading-spinner :width="24"></loading-spinner>
      <loading-spinner :width="16"></loading-spinner>
      <loading-spinner :width="8"></loading-spinner>
      <div class="page-style-guide__row">
        <button-primary @click.native="startPageLoadingAsync"
          >Page Loading</button-primary
        >
      </div>
    </style-guide-section>
    <style-guide-section>
      <template #title>
        Buttons
      </template>
      <div class="page-style-guide__row">
        <button-primary>Primary Button</button-primary>
      </div>
      <div class="page-style-guide__row">
        <button-secondary>Secondary Button</button-secondary>
      </div>
      <div class="page-style-guide__row">
        <button-tertiary>Tertiary Button</button-tertiary>
      </div>
    </style-guide-section>
  </div>
</template>

<script>
import waitAsync from '~/utils/wait-async'
import StyleGuideSection from '~/components/style-guide/style-guide-section'
import LoadingSpinner from '~/components/loading/loading-spinner'

export default {
  components: {
    StyleGuideSection,
    LoadingSpinner,
  },
  methods: {
    async startPageLoadingAsync() {
      this.$nuxt.$loading.start()
      await waitAsync(2000)
      this.$nuxt.$loading.finish()
    },
  },
}
</script>

<style lang="scss">
.page-style-guide {
  .page-style-guide__row {
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
}
</style>
