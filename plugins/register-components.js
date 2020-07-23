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
import SelectorCheckboxLabel from '~/components/selectors/selector-checkbox-label'
// inputs
import InputText from '~/components/inputs/input-text'
// select
import SelectDropdown from '~/components/select/select-dropdown'
import SelectOption from '~/components/select/select-option'
// form groups
import FormGroup from '~/components/form-group'

const components = {
  AnchorOrNuxtLink,
  // buttons
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
  // selectors
  SelectorRadio,
  SelectorRadioLabel,
  SelectorCheckbox,
  SelectorCheckboxLabel,
  // inputs
  InputText,
  // select
  SelectDropdown,
  SelectOption,
  // form groups
  FormGroup,
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
