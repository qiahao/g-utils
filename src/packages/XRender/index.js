import Vue from 'vue'
export default XRender
const XRenderRoot = Vue.extend({})

function XRender(options) {
  const { components, view, methods, data } = options
  if (components) {
    for (const key in components) {
      if (components.hasOwnProperty(key)) {
        XRenderRoot.component(key, components[key])
      }
    }
  }
  return {
    extends: XRenderRoot,
    methods: {...methods },
    data: data,
    render(h) {
      const _this = this
      return viewRender(h, view, _this)
    }
  }
}



function viewRender(h, view, context) {
  if (typeof view === 'string') { return view }
  view.property = view.property || {}
  const property = {...view.property }
  property.on = resolveOn(property.on, context)
  property.nativeOn = resolveOn(property.nativeOn, context)
  property.props = resolveProps(property.props, context)

  return h(view.tag, property, view.children && view.children.map(child => viewRender(h, child, context)))
}

function resolveOn(on, context) {
  const obj = {}
  if (!on) { return obj}
  for (const key in on) {
    if (on.hasOwnProperty(key)) {
      const handler = on[key];
      if (typeof handler === 'string') {
        obj[key] = context[handler]
      }
    }
  }
  return obj
}

function resolveProps(props, context) {
  const obj = {}
  if (!props) { return obj}
  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      const value = props[key];
      if (typeof value === 'function') {
        obj[key] = value.call(context)
      }
    }
  }
  // debugger
  return obj
}
