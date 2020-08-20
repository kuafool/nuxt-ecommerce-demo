<template>
  <div class="component-app-version">
    {{ version }}
  </div>
</template>

<script>
export default {
  computed: {
    version() {
      return process.env.version
    },
  },
}
</script>

<style lang="scss">
.component-app-version {
  display: none !important;
}
</style>
