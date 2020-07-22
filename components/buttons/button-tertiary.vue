<template>
  <anchor-or-nuxt-link
    :class="[
      'component-button',
      'component-button-tertiary',
      { 'is-disabled': disabled },
    ]"
    ><slot></slot
  ></anchor-or-nuxt-link>
</template>

<script>
import AnchorOrNuxtLink from '~/components/anchor-or-nuxt-link'

export default {
  components: {
    AnchorOrNuxtLink,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.component-button-tertiary {
  color: #000;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #000;
    opacity: 0.3;
    text-decoration: underline;
  }

  &:active {
    opacity: 0.3;
  }

  &.is-disabled {
    cursor: default;
    opacity: 0.3;
  }
}
</style>
