<template>
  <div class="dropdown" @mouseover="openSubmenu" @mouseleave="closeSubmenu">
    <MainNavItem>Cultes</MainNavItem>
    
    <div v-show="isOpen" class="dropdown__submenu">
      <Tabs>
        <template v-slot:navTabs>
          <ul class="nav-tabs">
            <li><NavTab panel="cultes">Cultes</NavTab></li>
            <li><NavTab panel="celebrations">Célébrations</NavTab></li>
            <li><NavTab panel="musical">Cultes musicaux</NavTab></li>
            <li><NavTab panel="allages">Cultes tous âges</NavTab></li>
          </ul>
        </template>

        <template v-slot:tabContent>
          <TabPanel title="cultes">
            <div class="date">
              <h2 class="date__title">Lun 1 Nov</h2>
              <div class="date__events">
                <div class="event">
                  <h3 class="event__title">Office du milieu du jour</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Culte, Sainte cène</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
              </div>
            </div>
            <div class="date">
              <h2 class="date__title">Mar 2 Nov</h2>
              <div class="date__events">
                <div class="event">
                  <h3 class="event__title">Office du milieu du jour</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Culte, Sainte cène</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Célébration oecuménique kermesse des paroisses</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
              </div>
            </div>
            <div class="date">
              <h2 class="date__title">Mer 3 Nov</h2>
              <div class="date__events">
                <div class="event">
                  <h3 class="event__title">Office du milieu du jour</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Culte, Sainte cène</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
              </div>
            </div>

            <Button>Tous les cultes</Button>
          </TabPanel>
          <TabPanel title="celebrations">
            <div class="date">
              <h2 class="date__title">Lun 1 Nov</h2>
              <div class="date__events">
                <div class="event">
                  <h3 class="event__title">Nouvelle période Agenda Réformés</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Groupe biblique oecuménique</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Dieu aujourd'hui ? entre incertitudes et confiance</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Groupe de méditation chrétienne</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Atelier couture</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Petit-Lancy/Saint-Luc : Groupe féminin</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
              </div>
            </div>
            <div class="date">
              <h2 class="date__title">Mar 2 Nov</h2>
              <div class="date__events">
                <div class="event">
                  <h3 class="event__title">Prière et méditation</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
              </div>
            </div>

            <Button>Toutes les célébrations</Button>
          </TabPanel>
          <TabPanel title="musical">
            <div class="date">
              <h2 class="date__title">Lun 1 Nov</h2>
              <div class="date__events">
                <div class="event">
                  <h3 class="event__title">Office du milieu du jour</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Culte, Sainte cène</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
              </div>
            </div>
            <div class="date">
              <h2 class="date__title">Mar 2 Nov</h2>
              <div class="date__events">
                <div class="event">
                  <h3 class="event__title">Office du milieu du jour</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Culte, Sainte cène</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Célébration oecuménique kermesse des paroisses</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
              </div>
            </div>
            <div class="date">
              <h2 class="date__title">Mer 3 Nov</h2>
              <div class="date__events">
                <div class="event">
                  <h3 class="event__title">Office du milieu du jour</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Culte, Sainte cène</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
              </div>
            </div>

            <Button>Tous les cultes musicaux</Button>
          </TabPanel>
          <TabPanel title="allages">
            <div class="date">
              <h2 class="date__title">Lun 1 Nov</h2>
              <div class="date__events">
                <div class="event">
                  <h3 class="event__title">Nouvelle période Agenda Réformés</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Groupe de méditation chrétienne</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Atelier couture</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Petit-Lancy/Saint-Luc : Groupe féminin</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
              </div>
            </div>
            <div class="date">
              <h2 class="date__title">Mar 2 Nov</h2>
              <div class="date__events">
                <div class="event">
                  <h3 class="event__title">Office du milieu du jour</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Célébration oecuménique kermesse des paroisses</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
              </div>
            </div>
            <div class="date">
              <h2 class="date__title">Mer 3 Nov</h2>
              <div class="date__events">
                <div class="event">
                  <h3 class="event__title">Office du milieu du jour</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
                <div class="event">
                  <h3 class="event__title">Culte, Sainte cène</h3>
                  <p class="event__infos">Lieu, heure</p>
                </div>
              </div>
            </div>

            <Button>Tous les cultes tous âges</Button>
          </TabPanel>
        </template>
      </Tabs>
    </div>
  </div>
</template>

<script>
import dropdown from '@/mixins/dropdown.js'
import Button from '@/components/Button.vue'

export default {
  name: 'DropdownEvents',
  mixins: [dropdown],
  components: { Button }
}
</script>

<style lang="scss">
  @import '../scss/dropdown.scss';
  @import '../scss/tabs.scss';

  .date {
    display: flex;
    padding: 1em 0 0 0;

    &:not(:first-child){
      border-top: 1px solid rgba(0, 0, 0, .1);
    }
  }

  .date__title {
    color: rgba(0, 0, 0, .3);
    width: 200px;
    margin: 0;
  }

  .event__title {
    margin: 0;
  }

  .event__infos {
    color: rgba(0, 0, 0, .3);
    margin-top: 0;
  }
</style>