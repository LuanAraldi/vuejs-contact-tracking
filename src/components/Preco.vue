<template>
  <div>
    <h2>Preço R$ {{preco}}.00</h2>
  </div>
</template>

<script>
  import rdSender from 'rd-contact-tracking-sender'

  export default {
    data () {
      return {
        preco: 0
      }
    },
    created: function () {
      rdSender.send()
      this.preco = Math.floor(Math.random() * 1000) + 1
    }
  }
</script>

<style>
</style>
