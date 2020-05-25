<template>
  <button-base
    :disabled="disabled"
    class="component-button-tertiary"
    variant="component-button--tertiary"
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
