<template>
  <div class="dropdown" @mouseover="openSubmenu" @mouseleave="closeSubmenu">
    <MainNavItem>Activités</MainNavItem>
    
    <div v-show="isOpen" class="dropdown__submenu">
      <Tabs>
        <template v-slot:navTabs>
          <ul class="nav-tabs">
            <li><NavTab panel="formations">Formations</NavTab></li>
            <li><NavTab panel="catechese">Catéchèse</NavTab></li>
            <!--<li><NavTab panel="groupes-paroissiaux">Rencontres</NavTab></li>-->
            <li><a href="#" @mouseover="this.emitter.emit('closeTabPanels')">Accompagnement</a></li>
          </ul>
        </template>

        <template v-slot:tabContent>
          <TabPanel title="formations">
            
          </TabPanel>

          <TabPanel title="enfants-jeunes">
            
          </TabPanel>

          <TabPanel title="groupes-paroissiaux">
            
          </TabPanel>
        </template>
      </Tabs>
    </div>
  </div>
</template>

<script>
import dropdown from '@/mixins/dropdown.js'

export default {
  name: 'DropdownEvents',
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