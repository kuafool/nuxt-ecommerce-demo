<template>
  <input
    :class="['component-input-text', { 'is-error': error }]"
    type="text"
    :value="model"
    :maxlength="maxlength"
    v-on="inputListeners"
  />
</template>

<script>
export default {
  model: {
    prop: 'model',
    event: 'updateModel',
  },
  /* eslint-disable-next-line */
  props: {
    model: {
      type: String,
      default: '',
    },
    maxlength: {
      type: String || Number,
      default: null,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      onComposition: false,
    }
  },
  computed: {
    inputListeners() {
      return Object.assign({}, this.$listeners, {
        input: event => {
          if (this.onComposition) {
            return
          }
          if (
            (this.maxlength || this.maxlength === 0) &&
            this.maxlength < event.target.value.length
          ) {
            event.target.value = event.target.value.slice(0, this.maxlength)
          }
          this.$emit('updateModel', event.target.value)
        },
        compositionstart: this.onCompositionStart,
        compositionend: this.onCompositionEnd,
      })
    },
  },
  methods: {
    onCompositionStart() {
      this.onComposition = true
    },
    onCompositionEnd() {
      this.onComposition = false
    },
  },
}
</script>

<style lang="scss">
.component-input-text {
  box-shadow: none;
  appearance: none;
  border-radius: 0;
  outline: 0;
  box-sizing: border-box;
  line-height: normal;
  width: 100%;
  border: 1px solid #000;
  padding-left: 16px;
  height: 44px;
  font-size: 12px;

  &::placeholder {
    color: #000;
    opacity: 0.3;
  }

  // safari placeholder 垂直居中
  &::-webkit-input-placeholder {
    line-height: normal;
  }

  &[disabled] {
    opacity: 0.3;
  }

  &.is-error:not([disabled]) {
    border-color: #c40000;
  }
}
</style>
