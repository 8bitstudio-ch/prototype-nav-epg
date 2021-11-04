import MainNavItem from '@/components/MainNavItem.vue'
import Tabs from '@/components/Tabs.vue'
import NavTab from '@/components/NavTab.vue'
import TabPanel from '@/components/TabPanel.vue'

export default {
  components: {
    MainNavItem,
    Tabs,
    NavTab,
    TabPanel
  },
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    title: String,
  },
  methods: {
    openSubmenu() {
      this.isOpen = true
    },

    closeSubmenu() {
      this.isOpen = false
      this.emitter.emit('closeTabPanels')
    }
  }
}