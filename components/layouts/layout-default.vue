<template>
  <layout-base>
    <full-screen>
      <the-header></the-header>
      <slot></slot>
      <template #bottom>
        <the-footer></the-footer>
      </template>
      <template #outside>
        <div style="height:60px;background: red;"></div>
      </template>
    </full-screen>
  </layout-base>
</template>

<script>
import LayoutBase from '~/components/layouts/layout-base'
import FullScreen from '~/components/full-screen'
import TheHeader from '~/components/navigation/the-header'
import TheFooter from '~/components/navigation/the-footer'

export default {
  components: {
    LayoutBase,
    FullScreen,
    TheHeader,
    TheFooter,
  },
}
</script>
