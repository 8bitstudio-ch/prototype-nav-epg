<template>
  <div class="mainHeader">
    <div>
      <img :src="require('@/assets/logo-epg.png')" alt="EPG" width="140" />
      </div>
    <div>
      <ul>
        <li><a href="#">Église protestante de Genève</a></li>
        <li><a href="#">Paroisses et Espaces</a></li>
        <li><a href="#">Aumôneries</a></li>
        <li><a href="#">Actualité</a></li>
        <li><a href="#">Soutenir</a></li>
      </ul>
      <nav>
        <DropdownEvents title="evenement" />
        <DropdownSpirituality title="spiritualite" />
        <DropdownEngagment title="engagment" />
        <DropdownCelebration title="celebration" />
        <button class="searchButton">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
import DropdownEvents from './DropdownEvents.vue'
import DropdownSpirituality from './DropdownSpirituality.vue'
import DropdownEngagment from './DropdownEngagment.vue'
import DropdownCelebration from './DropdownCelebration.vue'

export default {
  name: 'MainNav',
  components: {
    DropdownEvents,
    DropdownSpirituality,
    DropdownEngagment,
    DropdownCelebration
  }
}
</script>

<style lang="scss" scoped>
  .mainHeader {
    display: flex;
    align-items: center;
    position: relative;

    & > div {
      margin-right: 2rem;
    }
  }
  nav {
    display: flex;
    
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    margin-left: .7em;

    a {
      display: block;
      padding: 1em;
      color: #777;
      text-decoration: none;
    }
  }

  .searchButton {
    margin-left: auto;
    padding: 1.5em;
    border: none;
    background: transparent;
  }
</style>