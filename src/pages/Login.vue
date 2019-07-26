<template>
  <!-- <q-page-container> -->
  <q-page padding>
    <!-- content -->
    <q-card  class="q-px-lg">
      <q-card-title>
        <div class="row justify-center items-center">
          <div class="col-md-6 text-center">
            <img src="../assets/logo.png" alt="">
          </div>
          <div id="login-title" class="col-md-6">
            <p class="text-center">
              Treinamento Web
            </p>
            <p class="text-center">
              VueJs + Quasar
            </p>
          </div>
        </div>
      </q-card-title>
      <q-card-main>
        <q-field
          dark
          helper= "Digite seu login ldap"
        >
        <q-input :suffix="ldxEmail" v-model="username" :float-label="capitalize($t('label.user'))"/>
        </q-field>
        <q-field
        >
        <q-input type= "password" v-model="password" :float-label="capitalize($t('label.password'))"/>
        </q-field>
        <q-btn @click="submit" label="Save">
        </q-btn>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<script>
import { format } from 'quasar'
const { capitalize } = format

export default {
  name: 'Login',
  //  Modelo de dados
  data () {
    return {
      username: 'nicolasnogueira',
      password: 'JoPYF3fT',
      ldxEmail: '@landix.com.br',
      capitalize
    }
  },
  computed: {
    fullUsername: function () { return this.username ? this.username + this.ldxEmail : undefined },
    dataSent: function () {
      var data = {'username': this.fullUsername, 'password': this.password}
      return data
    }
  },
  mounted: {

  },
  methods: {
    submit () {
      console.log('UsuĂ¡rio' + this.fullUsername + 'Senha ' + this.password)
      this.$axios.post('/landix/login/', this.dataSent)
        .then(response => {
          this.$q.sessionStorage.set('user', response.data)
          this.$store.commit('setUser', this.$q.sessionStorage.get.item('user'))
          console.log(response)
          this.$emmit('logged ')
          this.$q.notify({
            type: 'positive',
            message: 'Login realizado com sucesso.'
          })
          console.log('Deu certo')
          // alert("Bem vindo "+ )
        })
        .catch(e => { console.log('Deu ruim ') })
    }
  },
  watch: {
    username: data => {
      console.log('Assistindo ' + data)
      this.$q.notify({
        type: 'positive',
        message: 'Login realizado com sucesso.'
      })
    }
  }
}
</script>

<style>
</style>
