<template>
  <button-base
    :disabled="disabled"
    class="component-button-primary"
    variant="component-button--primary"
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
