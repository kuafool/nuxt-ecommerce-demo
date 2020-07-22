import Vue from 'vue'
// anchor
import AnchorOrNuxtLink from '~/components/anchor-or-nuxt-link'
// buttons
import ButtonPrimary from '~/components/buttons/button-primary'
import ButtonSecondary from '~/components/buttons/button-secondary'
import ButtonTertiary from '~/components/buttons/button-tertiary'
// selectors
import SelectorRadio from '~/components/selectors/selector-radio'

const components = {
  AnchorOrNuxtLink,
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
  SelectorRadio,
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
