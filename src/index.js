import VuePaginateAlMl from './components/App.vue'

const plugin = {
  install: Vue => {
    Vue.component(VuePaginateAlMl.name, VuePaginateAlMl)
  }
}

VuePaginateAlMl.install = plugin.install

export default VuePaginateAlMl
