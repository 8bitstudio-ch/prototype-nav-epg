<template>
  <div class="dropdown" @mouseover="openSubmenu" @mouseleave="closeSubmenu">
    <MainNavItem>Cérémonies</MainNavItem>
    
    <div v-show="isOpen" class="dropdown__submenu">
      <Tabs>
        <template v-slot:navTabs>
          <ul class="nav-tabs">
            <li><a href="#" @mouseover="this.emitter.emit('closeTabPanels')">Baptème</a></li>
            <li><a href="#" @mouseover="this.emitter.emit('closeTabPanels')">Confirmation</a></li>
            <li><a href="#" @mouseover="this.emitter.emit('closeTabPanels')">Mariage</a></li>
            <li><a href="#" @mouseover="this.emitter.emit('closeTabPanels')">Service funèbre </a></li>
            <li><a href="#" @mouseover="this.emitter.emit('closeTabPanels')">Liturgie</a></li>
            <!--<li><NavTab panel="locations">Louer une salle</NavTab></li>-->
          </ul>
        </template>

        <template v-slot:tabContent>
          <TabPanel title="locations">
            <ul>
              <li><a href="#">Salle 1</a></li>
              <li><a href="#">Salle 2</a></li>
              <li><a href="#">Salle 3</a></li>
            </ul>
          </TabPanel>
        </template>
      </Tabs>
    </div>
  </div>
</template>

<script>
import dropdown from '@/mixins/dropdown.js'

export default {
  mixins: [dropdown],
}
</script>

<style lang="scss">
  @import '../scss/dropdown.scss';
  @import '../scss/tabs.scss';

  .prieres {
    display: flex;

    & > div {
      width: 50%;
    }
  }

  .two-col {
    columns: 2;
  }
</style>