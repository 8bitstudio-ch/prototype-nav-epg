<template>
  <div v-show="isOpen" @mouseover="openTab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
    }
  }, 
  props: {
    title: String,
  },
  mounted() {
    this.emitter.on('openTabPanel', (panel) => {
      if( panel === this.title ){
        this.openTab()
      } else {
        this.closeTab()
      }
    })

    this.emitter.on('closeTabPanels', () => {
      this.closeTab()
    })
  },
  methods: {
    openTab(){
      this.isOpen = true
    },
    closeTab(){
      this.isOpen = false
    },
  }
}
</script>