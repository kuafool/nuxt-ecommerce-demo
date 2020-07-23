<template>
  <div
    v-click-outside="close"
    :class="[
      'component-select-dropdown',
      { 'is-disabled': disabled },
      { 'is-error': error },
      { 'is-active': active },
    ]"
  >
    <div
      :class="[
        'component-select-dropdown__trigger',
        { 'is-placeholder': emptyModel },
      ]"
      @click="toggle"
    >
      {{ emptyModel ? placeholder : textFunc(model, textPath) }}
    </div>
    <div class="component-select-dropdown__options">
      <select-option
        v-for="(option, index) in options"
        :key="index"
        :selected="equal(option)"
        @click="select(option)"
      >
        <slot>{{ textFunc(option, textPath) }}</slot>
      </select-option>
    </div>
  </div>
</template>

<script>
import getValueAtPath from '~/utils/get-value-at-path'
import SelectOption from '~/components/select/select-option'

export default {
  components: {
    SelectOption,
  },
  model: {
    prop: 'model',
    event: 'updateModel',
  },
  props: {
    /* eslint-disable-next-line */
    model: {},
    options: {
      type: Array,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    // text
    textPath: {
      type: String,
      default: null,
    },
    textFunc: {
      type: Function,
      default: (option, textPath) => {
        return getValueAtPath(option, textPath, option)
      },
    },
    // identity
    identityPath: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      active: false,
    }
  },
  computed: {
    emptyModel() {
      return this.model === undefined || this.model === null
    },
  },
  methods: {
    toggle() {
      if (this.disabled) {
        return
      }
      this.active = !this.active
    },
    open() {
      this.active = true
    },
    close() {
      this.active = false
    },
    select(option) {
      this.$emit('updateModel', option)
      this.active = false
    },
    equal(option) {
      return (
        getValueAtPath(this.model, this.identityPath, this.model) ===
        getValueAtPath(option, this.identityPath, option)
      )
    },
  },
}
</script>

<style lang="scss">
.component-select-dropdown {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  font-size: 12px;
  color: #000;

  .component-select-dropdown__trigger {
    box-sizing: border-box;
    border: 1px solid #000;
    height: 44px;
    width: 100%;
    padding-left: 16px;
    display: flex;
    align-items: center;
    line-height: normal;
    cursor: pointer;

    &.is-placeholder {
      color: rgba($color: #000000, $alpha: 0.3);
    }
  }

  .component-select-dropdown__options {
    box-sizing: border-box;
    position: absolute;
    top: 44px;
    right: 0;
    left: 0;
    background: #fff;
    border: 1px solid #000;
    margin-top: -1px;
    overflow-y: auto;
    display: none;
    z-index: 99;
    max-height: 225px;
    min-height: 90px;
  }

  &.is-active {
    .component-select-dropdown__options {
      display: block;
    }
  }

  &.is-disabled {
    opacity: 0.3;

    .component-select-dropdown__trigger {
      cursor: default;
      background: rgba($color: #000000, $alpha: 0.1);
    }
  }

  &.is-error:not(.is-disabled) {
    .component-select-dropdown__trigger {
      border-color: #c40000;
    }
  }
}
</style>
