<template>
  <div class="dropdown" @mouseover="openSubmenu" @mouseleave="closeSubmenu">
    <MainNavItem>Activités</MainNavItem>
    
    <div v-show="isOpen" class="dropdown__submenu">
      <Tabs>
        <template v-slot:navTabs>
          <ul class="nav-tabs">
            <li><a href="#">Prière et spiritualité</a></li>
            <li><a href="#">Enfance et jeunesse</a></li>
            <li><a href="#">Formations</a></li>
            <li><a href="#">Musique et culture</a></li>
            <li><a href="#">Entraide et solidarité</a></li>
            <li><a href="#">Environnement</a></li>
            <li><a href="#">Autre</a></li>
          </ul>
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