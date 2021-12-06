<template>
  <div class="dropdown" @mouseover="openSubmenu" @mouseleave="closeSubmenu">
    <MainNavItem>Spiritualité</MainNavItem>
    
    <div v-show="isOpen" class="dropdown__submenu">
      <Tabs>
        <template v-slot:navTabs>
          <ul class="nav-tabs">
            <li><NavTab panel="predications">Prédications</NavTab></li>
            <li><NavTab panel="prieres">Prières</NavTab></li>
            <li><NavTab panel="textes-spirituels">Textes spirituels</NavTab></li>
            <li>
              <a href="#">
                Je cherche Dieu
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16" style="margin-left: .3em">
                  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                </svg>
                </a>
              </li>
          </ul>
        </template>

        <template v-slot:tabContent>
          <TabPanel title="prieres">
            <div class="prieres">
              <div>
                <h3>Prières</h3>
                <ul>
                  <li><a href="#">Notre père</a></li>
                  <li><a href="#">Carmel de la paix</a></li>
                  <li><a href="#">Confession de foi</a></li>
                  <li><a href="#">La Trinité</a></li>
                  <li><a href="#">Saint Anselme</a></li>
                </ul>
              </div>
              <div>
                <h3>La prière de l'Eglise</h3>
                <p>Recceuil de prières rassemblant les propositions responsables des Régions, des paroisses, des Services, des ministères et des associations reliées à l’EPG.</p>
                <Button>Télécharger</Button>
              </div>
            </div>
          </TabPanel>

          <TabPanel title="predications">
            <h3>Thèmes</h3>
            <ul class="two-col">
              <li><a href="#">Sur l’Ascension</a></li>
              <li><a href="#">Culte de l’Assemblée de l’Eglise 2015</a></li>
              <li><a href="https://epg.ch/sur-lavent/">l’Avent</a></li>
              <li><a href="#">le dimanche</a></li>
              <li><a href="#">L'Escalade</a></li>
              <li><a title="L’espérance" href="https://epg.ch/lesperance/">l’espérance</a></li>
              <li><a href="#">l’exode</a></li>
              <li><a title="La foi" href="https://epg.ch/la-foi/">la foi</a></li>
              <li><a href="#">le génocide arménien</a></li>
              <li><a href="#">la liberté</a></li>
              <li><a href="#">la louange</a></li>
              <li><a title="La lumière" href="https://epg.ch/la-lumiere/">la lumière</a></li>
              <li><a title="Sur marie" href="https://epg.ch/sur-marie/">Marie</a></li>
              <li><a href="#">la migration et la cohabitation</a></li>
              <li><a href="#">la nourriture spirituelle</a></li>
              <li><a title="Sur l’offense" href="#">l’offense</a></li>
              <li><a title="Sur Pâques" href="#">Pâques</a></li>
              <li><a href="#">la Pentecôte</a></li>
              <li><a href="#">la reconnaissance</a></li>
              <li><a href="#">la Réformation</a></li>
              <li><a href="#">résister</a></li>
              <li><a href="#">la Restauration</a></li>
              <li><a href="#">le respect de la création</a></li>
              <li><a href="#">le seigneur</a></li>
              <li><a href="#">la transfiguration</a></li>
              <li><a href="#">la trinité</a></li>
            </ul>
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