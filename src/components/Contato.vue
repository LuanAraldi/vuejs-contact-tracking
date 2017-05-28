<template>
  <div>
    <div class="row">
      <div class="col s12 m3"></div>
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">Entre em Contato</span>
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s12">
                    <input id="nome" type="text" class="validate" v-model="contato.nome">
                    <label for="nome">Nome</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input id="email" type="email" class="validate" v-model="contato.email">
                    <label for="email">Email</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="card-action">
            <a v-on:click="enviarForm" href="">Enviar</a>
          </div>
        </div>
      </div>
      <div class="col s12 m3"></div>
    </div>
  </div>
</template>

<script>
  import rdSender from 'rd-contact-tracking-sender'
  import axios from 'axios'

  export default {
    data () {
      return {
        contato: {
          nome: '',
          email: ''
        }
      }
    },
    created: function () {
      rdSender.send()
    },
    methods: {
      enviarForm: function () {
        event.preventDefault()

        let contactId = document.cookie
        const idPosition = contactId.indexOf('=')
        contactId = contactId.substr(idPosition + 1)

        console.log(this.contato)
        axios.patch('https://rails-contact-tracking.herokuapp.com/contacts/' + contactId, {
          contact: {
            name: this.contato.nome,
            email: this.contato.email
          }
        })
      }
    }
  }
</script>

<style>
</style>
