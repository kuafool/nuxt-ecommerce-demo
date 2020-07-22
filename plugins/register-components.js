import Vue from 'vue'
// anchor
import AnchorOrNuxtLink from '~/components/anchor-or-nuxt-link'
// buttons
import ButtonPrimary from '~/components/buttons/button-primary'
import ButtonSecondary from '~/components/buttons/button-secondary'
import ButtonTertiary from '~/components/buttons/button-tertiary'
// selectors
import SelectorRadio from '~/components/selectors/selector-radio'
import SelectorRadioLabel from '~/components/selectors/selector-radio-label'
import SelectorCheckbox from '~/components/selectors/selector-checkbox'

const components = {
  AnchorOrNuxtLink,
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
  SelectorRadio,
  SelectorRadioLabel,
  SelectorCheckbox,
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
