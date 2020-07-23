<template>
  <label
    :for="$attrs.id"
    :disabled="$attrs.disabled"
    class="component-selector-checkbox-label"
    ><selector-checkbox
      v-bind="$attrs"
      @updateModel="updateModel"
    ></selector-checkbox
    ><slot></slot
  ></label>
</template>

<script>
import SelectorCheckbox from '~/components/selectors/selector-checkbox'

export default {
  components: {
    SelectorCheckbox,
  },
  inheritAttrs: false,
  model: {
    prop: 'model',
    event: 'updateModel',
  },
  /* eslint-disable-next-line */
  props: ['id'],
  methods: {
    updateModel(event) {
      this.$emit('updateModel', event)
    },
  },
}
</script>

<style lang="scss">
.component-selector-checkbox-label {
  font-size: 12px;
  cursor: pointer;
  display: inline-flex;
  line-height: normal;
  align-items: center;
  color: rgba($color: #000000, $alpha: 0.65);

  .component-selector-checkbox {
    margin-right: 4px;
  }

  &[disabled] {
    opacity: 0.3;
  }
}
</style>
