<template>
  <anchor-or-nuxt-link
    :class="['component-button', variant, { 'is-disabled': disabled }]"
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
    variant: {
      type: String,
      default: 'component-button--primary',
      validator(value) {
        return [
          'component-button--primary',
          'component-button--secondary',
          'component-button--tertiary',
        ].includes(value)
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
