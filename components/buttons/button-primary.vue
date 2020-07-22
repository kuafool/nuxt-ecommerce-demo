<template>
  <anchor-or-nuxt-link
    :class="[
      'component-button',
      'component-button-primary',
      { 'is-disabled': disabled },
    ]"
    v-on="$listeners"
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
.component-button-primary {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: normal;
  overflow: hidden;
  cursor: pointer;

  background-color: #000;
  color: #fff;

  font-size: 14px;
  height: 56px;
  width: 100%;

  @include layout-tablet {
    height: 44px;
  }

  &:hover {
    color: #fff;
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
