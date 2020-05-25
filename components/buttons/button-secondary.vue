<template>
  <button-base
    :disabled="disabled"
    class="component-button-secondary"
    variant="component-button--secondary"
    ><slot></slot
  ></button-base>
</template>

<script>
import ButtonBase from '~/components/buttons/button-base'

export default {
  components: {
    ButtonBase,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
