<template>
  <input
    type="checkbox"
    class="component-selector-checkbox"
    :checked="checked"
    :value="value"
    v-on="checkboxListeners"
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
    checkboxListeners() {
      return Object.assign({}, this.$listeners, {
        change: event => {
          if (Array.isArray(this.model)) {
            if (this.model.includes(this.value) && !event.target.checked) {
              this.model.splice(this.model.indexOf(this.value), 1)
            }
            if (!this.model.includes(this.value) && event.target.checked) {
              this.model.push(this.value)
            }
          } else {
            this.$emit('updateModel', event.target.checked)
          }
        },
      })
    },
    checked() {
      if (Array.isArray(this.model)) {
        return !!this.model.includes(this.value)
      }
      return !!this.model
    },
  },
}
</script>

<style lang="scss">
.component-selector-checkbox {
  box-sizing: border-box;
  position: relative;
  background: #fff;
  cursor: pointer;
  appearance: none;
  outline: 0;
  border: 1px solid #000;
  width: 24px;
  height: 24px;

  @include layout-desktop {
    width: 16px;
    height: 16px;
  }

  &:checked {
    &::before {
      content: '';
      background-color: #000;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 14px;
      height: 14px;

      @include layout-desktop {
        width: 10px;
        height: 10px;
      }
    }
  }

  &:disabled {
    opacity: 0.3;
  }
}
</style>
