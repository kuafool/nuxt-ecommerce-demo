<template>
  <div class="component-style-guide-row"><slot></slot></div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.component-style-guide-row {
  &:not(:first-child) {
    margin: 16px 0;
  }
}
</style>
