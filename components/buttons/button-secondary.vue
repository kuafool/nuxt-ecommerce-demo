<template>
  <anchor-or-nuxt-link
    :class="[
      'component-button',
      'component-button-secondary',
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
.component-button-secondary {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: normal;
  overflow: hidden;
  cursor: pointer;

  background-color: #fff;
  color: #000;
  border: 1px solid #000;

  font-size: 14px;
  height: 56px;
  width: 100%;

  @include layout-desktop {
    height: 44px;
  }

  &:hover {
    color: #000;
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
