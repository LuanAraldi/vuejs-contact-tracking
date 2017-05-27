<template>
  <div>
    <nav id="nav-bar">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">RD</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <router-link tag="li" to="/">
            <a>Home</a>
          </router-link>
          <router-link tag="li" to="/preco">
            <a>Preço</a>
          </router-link>
          <router-link tag="li" to="/contato">
            <a>Contato</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  background-color: #35739f;
}
</style>
