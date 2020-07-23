const elementList = []
const ctx = '__clickOutsideContext__'
let elementIdIndex = 0

document.addEventListener('mousedown', event => {
  elementList.forEach(element => element[ctx].handler(event))
})

document.addEventListener('touchstart', event => {
  elementList.forEach(element => element[ctx].handler(event))
})

function createClickOutSideHandler(el, binding, vnode) {
  return function(event) {
    const isClickOutSide = event.target !== el && !el.contains(event.target)

    if (isClickOutSide) {
      el[ctx].method()
    }
  }
}

export default {
  bind(el, binding, vnode) {
    elementList.push(el)
    const id = elementIdIndex++
    el[ctx] = {
      id,
      handler: createClickOutSideHandler(el, binding, vnode),
      methodName: binding.expression,
      method: binding.value,
    }
  },
  update(el, binding, vnode) {
    el[ctx].handler = createClickOutSideHandler(el, binding, vnode)
    el[ctx].methodName = binding.expression
    el[ctx].method = binding.value
  },
  unbind(el) {
    const len = elementList.length

    for (let i = 0; i < len; i++) {
      if (elementList[i][ctx].id === el[ctx].id) {
        elementList.splice(i, 1)
        break
      }
    }

    delete el[ctx]
  },
}
