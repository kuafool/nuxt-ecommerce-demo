<template>
  <div class="component-layout-base">
    <app-version></app-version>
    <slot></slot>
  </div>
</template>

<script>
import AppVersion from '~/components/app-version'

export default {
  components: {
    AppVersion,
  },
}
</script>
