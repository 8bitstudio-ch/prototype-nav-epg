<template>
  <div class="universalnav">
    <a href="/">
      <img :src="require('@/assets/logo-epg-white-mini.png')" alt="EPG" />
    </a>
    <ul>
      <li>
        <a href="#">Événements</a>
      </li>
      <li>
        <a href="#">Prier et méditer</a>
      </li>
      <li>
        <a href="#">S'engager</a>
      </li>
      <li>
        <a href="#">Préparer une célébration</a>
      </li>
    </ul>
  </div>
</template>


<style scoped>
.universalnav {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: black;
  color: white;
}

ul {
  display: flex;
  margin: 0;
  padding: 0;
  margin-left: 2em;
  list-style: none;
}

li a {
  display: block;
  padding: 1em;
  color: white;
  text-decoration: none;
  font-size: .75em;
}
</style>