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
          <li><a href="#">Mission</a></li>
          <li><a href="#">Organisation</a></li>
          <li><a href="#">Histoire</a></li>
        </ul>
      </div>
      <div>
        <h4>Cultes</h4>
        <ul>
          <li><a href="#">Cultes </a></li>
          <li><a href="#">Célébrations</a></li>
          <li><a href="#">Cultes musicaux</a></li>
          <li><a href="#">Cultes tous âges</a></li>
        </ul>
      </div>
      <div>
        <h4>Spiritualité</h4>
        <ul>
          <li><a href="#">Prédications</a></li>
          <li><a href="#">Prières </a></li>
          <li><a href="#">Textes spirituels</a></li>
          <li><a href="#">Je cherche Dieu</a></li>
        </ul>
      </div>
      <div>
        <h4>Activités</h4>
        <ul>
          <li><a href="#">Formations</a></li>
          <li><a href="#">Catéchèse</a></li>
          <li><a href="#">Rencontres</a></li>
          <li><a href="#">Accompagnement</a></li>
        </ul>
      </div>
      <div>
        <h4>Cérémonies</h4>
        <ul>
          <li><a href="#">Baptème</a></li>
          <li><a href="#">Confirmation</a></li>
          <li><a href="#">Mariage</a></li>
          <li><a href="#">Service funèbre</a></li>
          <li><a href="#">Liturgie</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue'

export default {
  name: 'App',
  components: {
    MainNav
  }
}
</script>

<style lang="scss">
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