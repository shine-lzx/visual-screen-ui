import Border from '../packages/border'
import ScrollTable from '../packages/scroll-table'

const components = [Border, ScrollTable]

const install = function (Vue) {
  if (install.installed) return
  components.map((component) => Vue.component(component.name, component))
}

if (typeof window.Vue !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.1.0',
  install,
  Border,
  ScrollTable,
}
