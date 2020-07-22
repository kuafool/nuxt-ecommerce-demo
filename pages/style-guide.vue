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
      <style-guide-row>
        <button-primary @click="startPageLoadingAsync"
          >Page Loading</button-primary
        >
      </style-guide-row>
    </style-guide-section>
    <style-guide-section class="page-style-guide__buttons">
      <template #title>
        Buttons
      </template>
      <button-primary>Primary</button-primary>
      <button-primary disabled>Primary Disabled</button-primary>
      <button-secondary>Secondary</button-secondary>
      <button-secondary disabled>Secondary Disabled</button-secondary>
      <button-tertiary>Tertiary</button-tertiary>
      <button-tertiary disabled>Tertiary Disabled</button-tertiary>
    </style-guide-section>
    <style-guide-section>
      <template #title>
        Selectors
      </template>
      <style-guide-row>
        <selector-radio></selector-radio>
        <selector-radio checked></selector-radio>
        <selector-radio disabled></selector-radio>
      </style-guide-row>
      <style-guide-row>
        <div>{{ appellation }}</div>
      </style-guide-row>
      <style-guide-row>
        <selector-radio
          v-model="appellation"
          name="appellation"
          value="先生"
          disabled
        ></selector-radio>
        <selector-radio
          v-model="appellation"
          name="appellation"
          value="太太"
        ></selector-radio>
        <selector-radio
          v-model="appellation"
          name="appellation"
          value="小姐"
        ></selector-radio>
      </style-guide-row>
      <style-guide-row>
        <selector-radio-label
          id="radio-label-mr"
          v-model="appellation"
          name="appellationAgain"
          value="先生"
          >先生</selector-radio-label
        >
        <selector-radio-label
          id="radio-label-mrs"
          v-model="appellation"
          name="appellationAgain"
          value="太太"
          disabled
          >太太</selector-radio-label
        >
        <selector-radio-label
          id="radio-label-ms"
          v-model="appellation"
          name="appellationAgain"
          value="女士"
          >女士</selector-radio-label
        >
      </style-guide-row>
      <style-guide-row>
        <selector-checkbox v-model="checked"></selector-checkbox>
        <selector-checkbox v-model="checked"></selector-checkbox>
        <selector-checkbox v-model="checked" disabled></selector-checkbox>
      </style-guide-row>
      <style-guide-row>
        <div>Fruits: {{ fruits.join(', ') }}</div>
      </style-guide-row>
      <style-guide-row>
        <selector-checkbox v-model="fruits" value="apple"></selector-checkbox>
        <selector-checkbox v-model="fruits" value="peach"></selector-checkbox>
        <selector-checkbox
          v-model="fruits"
          disabled
          value="banana"
        ></selector-checkbox>
      </style-guide-row>
      <style-guide-row>
        <selector-checkbox-label
          id="checkbox-label-apple"
          v-model="fruits"
          value="apple"
          >apple</selector-checkbox-label
        >
        <selector-checkbox-label
          id="checkbox-label-peach"
          v-model="fruits"
          value="peach"
          disabled
          >peach</selector-checkbox-label
        >
        <selector-checkbox-label
          id="checkbox-label-banana"
          v-model="fruits"
          value="banana"
          >banana</selector-checkbox-label
        >
      </style-guide-row>
    </style-guide-section>
  </div>
</template>

<script>
import waitAsync from '~/utils/wait-async'
import StyleGuideSection from '~/components/style-guide/style-guide-section'
import StyleGuideRow from '~/components/style-guide/style-guide-row'
import LoadingSpinner from '~/components/loading/loading-spinner'

export default {
  components: {
    StyleGuideSection,
    StyleGuideRow,
    LoadingSpinner,
  },
  data() {
    return {
      appellation: '先生',
      checked: false,
      fruits: [],
    }
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
  padding-bottom: 80px;

  .page-style-guide__buttons {
    .component-button {
      &:not(:first-child) {
        margin-top: 16px;
      }
    }
  }
}
</style>
