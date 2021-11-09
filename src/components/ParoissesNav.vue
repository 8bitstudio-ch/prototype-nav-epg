<template>
  <div>
    <UniversalNav />

    <h1 class="paroisseName">
      Paroisse de Chêne
    </h1>

    <nav>
      <MainNavItem>Cultes &amp; Evénements</MainNavItem>
      <MainNavItem>Actualités</MainNavItem>
      <DropdownActivities title="activities" />
      <MainNavItem>Qui sommes-nous</MainNavItem>
    </nav>
  </div>
</template>

<script>
import UniversalNav from '@/components/UniversalNav.vue'
import MainNavItem from '@/components/MainNavItem.vue'
import DropdownActivities from '@/components/DropdownActivities.vue'

export default {
  name: 'MainNav',
  components: {
    UniversalNav,
    MainNavItem,
    DropdownActivities
  }
}
</script>

<style lang="scss" scoped>
  .paroisseName {
    margin: 4rem 2rem 1rem 1.5rem;
  }

  nav {
    display: flex;
    position: relative;
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