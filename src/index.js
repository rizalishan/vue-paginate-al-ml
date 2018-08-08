import VuePaginateMl from './components/App.vue'

const plugin = {
  install: Vue => {
    Vue.component(VuePaginateMl.name, VuePaginateMl)
  }
}

VuePaginateMl.install = plugin.install

export default VuePaginateMl
