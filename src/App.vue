<template>
<div class="header">
  <div class="container">
    <MainNav />
  </div>
</div>

<div class="footer">
  <div class="container">
    <div>
      <h4>Église protestante de Genève</h4>
      <ul>
        <li><a href="#">Lieux phares</a></li>
        <li><a href="#">Valeurs et mission</a></li>
        <li><a href="#">Communiqués</a></li>
        <li><a href="#">Organisation</a></li>
        <li><a href="#">Projets</a></li>
        <li><a href="#">Les soutiens</a></li>
        <li><a href="#">Histoire</a></li>
      </ul>
    </div>
    <div>
      <h4>Événements </h4>
      <ul>
        <li><a href="#">Cultes </a></li>
        <li><a href="#">Rencontres </a></li>
        <li><a href="#">Enfants</a></li>
      </ul>
    </div>
    <div>
      <h4>Prier et méditer</h4>
      <ul>
        <li><a href="#">Prières</a></li>
        <li><a href="#">Prédications</a></li>
        <li><a href="#">Témoignages de foi</a></li>
      </ul>
    </div>
    <div>
      <h4>S'engager</h4>
      <ul>
        <li><a href="#">Devenir bénévole</a></li>
        <li><a href="#">Formations</a></li>
        <li><a href="#">Enfants et jeunes</a></li>
        <li><a href="#">Legs et testaments</a></li>
        <li><a href="#">Faire un don</a></li>
      </ul>
    </div>
    <div>
      <h4>Préparer une célébration</h4>
      <ul>
        <li><a href="#">Baptème</a></li>
        <li><a href="#">Mariage</a></li>
        <li><a href="#">Funérailles</a></li>
        <li><a href="#">Louer une salle</a></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import MainNav from './components/MainNav.vue'

export default {
  name: 'App',
  components: {
    MainNav
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
}

.container {
  max-width: 1440px;
  margin: auto;
  text-align: left;
}

.header {
  border-bottom: 1px solid #e5e5e5;
}

.footer {
  margin-top:auto;
  border-top: 1px solid #e5e5e5;

  .container {
    display: flex;
    justify-content: space-between;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    a {
      display: block;
      padding: 1em;
      color: #777;
      text-decoration: none;
    }
  }
}
</style>
