import Vue from 'vue'
// buttons
import ButtonPrimary from '~/components/buttons/button-primary'
import ButtonSecondary from '~/components/buttons/button-secondary'
import ButtonTertiary from '~/components/buttons/button-tertiary'

const components = {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
