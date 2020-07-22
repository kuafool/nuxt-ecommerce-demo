<template>
  <input
    type="radio"
    class="component-selector-radio"
    :checked="checked"
    :value="value"
    v-on="radioListeners"
  />
</template>

<script>
export default {
  model: {
    prop: 'model',
    event: 'updateModel',
  },
  /* eslint-disable-next-line */
  props: ['model', 'value'],
  computed: {
    radioListeners() {
      return Object.assign({}, this.$listeners, {
        change: event => {
          this.$emit('updateModel', event.target.value)
        },
      })
    },
    checked() {
      return (
        this.$attrs.checked !== undefined ||
        (this.model !== undefined && this.model === this.value)
      )
    },
  },
}
</script>

<style lang="scss">
.component-selector-radio {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  -webkit-appearance: none;
  cursor: pointer;

  background-color: #fff;
  border: 1px solid #000;
  border-radius: 50%;
  width: 24px;
  height: 24px;

  @include layout-desktop {
    width: 16px;
    height: 16px;
  }

  &:checked {
    cursor: default;

    &::before {
      content: '';
      box-sizing: border-box;
      display: block;
      background-color: #000;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      @include layout-desktop {
        width: 6px;
        height: 6px;
      }
    }
  }

  &:disabled {
    opacity: 0.3;
  }
}
</style>
