<template>
  <div
    :style="{
      width: width + 'px',
      height: width + 'px',
    }"
    class="component-loading-spinner"
  >
    <div
      v-for="i in 12"
      :key="i"
      class="component-loading-spinner__blade-wrapper"
    >
      <div
        :style="{
          left: left + 'px',
          width: bladeWidth + 'px',
          height: bladeLength + 'px',
        }"
        class="component-loading-spinner__blade"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 32,
    },
  },
  computed: {
    bladeWidth() {
      return Math.ceil(this.width * (3 / 68))
    },
    bladeLength() {
      return this.width * (18 / 68)
    },
    left() {
      return this.width / 2 - this.bladeWidth / 2
    },
  },
}
</script>

<style lang="scss">
$spinner-width: 32px;
$spinner-blade-count: 12;
$spinner-blade-length: $spinner-width * (18px/68px);
$spinner-blade-width: ceil($spinner-width * (3px/68px));

@keyframes spinner__loader {
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
  }
}

.component-loading-spinner {
  display: inline-block;
  position: relative;
  height: $spinner-width;
  width: $spinner-width;

  .component-loading-spinner__blade-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform-origin: center;
    animation: spinner__loader ($spinner-blade-count / 10 * 0.75s) linear
      infinite;

    @for $i from 1 through $spinner-blade-count {
      &:nth-child(#{$i}) {
        transform: rotate(($i - 1) * (360deg / $spinner-blade-count));
        animation-delay: -(($spinner-blade-count - $i) / 10) * 0.75s;
      }
    }

    .component-loading-spinner__blade {
      display: block;
      position: absolute;
      top: 0;
      left: $spinner-width/2 - $spinner-blade-width/2;
      width: $spinner-blade-width;
      height: $spinner-blade-length;
      border-radius: 25%;
      background: #000;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
