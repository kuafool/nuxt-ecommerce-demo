import outerUrl from '~/validators/outer-url'

export default {
  functional: true,
  props: {},
  render(
    createElement,
    {
      props,
      children,
      slots,
      scopedSlots,
      data,
      parent,
      listeners,
      injections,
    },
  ) {
    let tag = 'nuxt-link'
    if (!data.attrs) {
      data.attrs = { href: 'javascript:void(0);' }
      tag = 'a'
    } else if (data.attrs.href) {
      tag = 'a'
      delete data.attrs.to
    } else if (!data.attrs.to) {
      data.attrs.href = 'javascript:void(0);'
      delete data.attrs.to
      tag = 'a'
    } else if (
      data.attrs.to.startsWith('javascript:') ||
      data.attrs.to.startsWith('tel:') ||
      data.attrs.to.startsWith('mailto:')
    ) {
      data.attrs.href = data.attrs.to
      delete data.attrs.to
      tag = 'a'
    } else if (outerUrl(data.attrs.to)) {
      data.attrs.href = data.attrs.to
      delete data.attrs.to
      tag = 'a'
    } else {
      tag = 'nuxt-link'
    }
    return createElement(tag, data, children)
  },
}
