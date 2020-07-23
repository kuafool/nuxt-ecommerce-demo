<template>
  <label
    :for="$attrs.id"
    :disabled="$attrs.disabled"
    class="component-selector-radio-label"
    ><selector-radio v-bind="$attrs" @updateModel="updateModel"></selector-radio
    ><slot></slot
  ></label>
</template>

<script>
import SelectorRadio from '~/components/selectors/selector-radio'

export default {
  components: {
    SelectorRadio,
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
.component-selector-radio-label {
  font-size: 12px;
  cursor: pointer;
  display: inline-flex;
  line-height: normal;
  align-items: center;
  color: rgba($color: #000000, $alpha: 0.65);

  .component-selector-radio {
    margin-right: 4px;
  }

  &[disabled] {
    opacity: 0.3;
  }
}
</style>
