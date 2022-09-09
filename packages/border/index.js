import Border from './src/main'

/* istanbul ignore next */
Border.install = function (Vue) {
  Vue.component(Border.name, Border)
}

export default Border
