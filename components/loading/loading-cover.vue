<template>
  <div v-if="isLoading" class="component-loading-cover">
    <over-lay />
    <loading-spinner />
  </div>
</template>

<script>
import OverLay from '~/components/over-lay'
import LoadingSpinner from '~/components/loading/loading-spinner'

export default {
  components: {
    OverLay,
    LoadingSpinner,
  },
  data() {
    return {
      isLoading: false,
      isFailed: false,
    }
  },
  methods: {
    start() {
      this.isLoading = true
      this.isFailed = false
    },
    finish() {
      this.isLoading = false
    },
    fail() {
      this.isFailed = true
    },
  },
}
</script>

<style lang="scss">
.component-loading-cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3001;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
