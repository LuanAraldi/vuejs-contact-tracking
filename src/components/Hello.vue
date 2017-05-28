<template>
  <div class="hello">
    <img src="./../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Resultados Digitais</h2>
  </div>
</template>

<script>
  import rdSender from 'rd-contact-tracking-sender'

  export default {
    data () {
      return {
        msg: 'HOME'
      }
    },
    created: function () {
      rdSender.send()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
