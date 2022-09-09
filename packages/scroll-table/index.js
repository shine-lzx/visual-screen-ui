import ScrollTable from './src/main'

/* istanbul ignore next */
ScrollTable.install = function (Vue) {
  Vue.component(ScrollTable.name, ScrollTable)
}

export default ScrollTable
