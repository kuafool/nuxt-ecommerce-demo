import Vue from 'vue'
// anchor
import AnchorOrNuxtLink from '~/components/anchor-or-nuxt-link'
// buttons
import ButtonPrimary from '~/components/buttons/button-primary'
import ButtonSecondary from '~/components/buttons/button-secondary'
import ButtonTertiary from '~/components/buttons/button-tertiary'

const components = {
  AnchorOrNuxtLink,
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
