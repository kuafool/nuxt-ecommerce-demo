<template>
  <div
    :class="[
      'component-form-group',
      { 'is-required': required },
      { 'is-disabled': disabled },
      { 'is-error': error },
    ]"
  >
    <div class="component-form-group__label">
      <label>
        <slot name="label">{{ label }}</slot>
      </label>
      <slot name="tip"></slot>
    </div>
    <slot></slot>
    <div class="component-form-group__validation">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.component-form-group {
  position: relative;
  box-sizing: border-box;
  text-align: left;
  width: 100%;
  font-size: 12px;

  .component-form-group__label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    color: rgba($color: #000000, $alpha: 0.65);
  }

  .component-form-group__validation {
    color: rgba($color: #000000, $alpha: 0.3);
    margin-top: 8px;
    margin-bottom: 8px;
    line-height: 15px;
    min-height: 15px;
    transform: translateZ(0);
    font-size: 10px;
    opacity: 0;
  }

  &.is-required {
    .component-form-group__label {
      label {
        &::before {
          content: '*';
          display: inline-block;
          color: #c40000;
          margin-right: 2px;
        }
      }
    }
  }

  &.is-disabled {
    .component-form-group__label {
      color: rgba($color: #000000, $alpha: 0.3);
    }
  }

  &.is-error {
    .component-form-group__validation {
      color: #c40000;
      opacity: 1;
    }
  }
}
</style>
