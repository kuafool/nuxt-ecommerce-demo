<template>
  <div
    :class="['component-select-option', { 'is-selected': selected }]"
    v-on="$listeners"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.component-select-option {
  font-size: 14px;
  display: flex;
  align-items: center;
  line-height: normal;
  overflow-x: hidden;
  box-sizing: border-box;
  width: 100%;
  min-height: 45px;
  padding-left: 16px;
  cursor: pointer;

  &.is-selected {
    background: rgba($color: #000000, $alpha: 0.1);
  }
}
</style>
