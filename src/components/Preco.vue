<template>
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
      console.log('entrou')
      rdSender.send()
    }
  }
</script>

<template>

</template>
