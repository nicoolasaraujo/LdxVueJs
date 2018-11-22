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
        <q-input suffix="@gmail.com" v-model="username" :float-label="capitalize($t('label.user'))"/>
        </q-field>
        <q-field
        >
        <q-input type= "password" v-model="password" :float-label="capitalize($t('label.password'))"/>
        </q-field>
        <q-btn  @click="submit" label="Save">
        </q-btn>
        {{fullUsername}}
      </q-card-main>
    </q-card>
  </q-page>
</template>

<script>
import { format } from 'quasar'


const { capitalize } = format

export default {
  name: 'Login',
  //Modelo de dados
  data(){
    return {
      username : undefined,
      password : undefined,
      capitalize
    }
  },
  //Funções que esperam algum retorno
  computed:{
    fullUsername: function(){return this.username ? this.username + '@landix.com.br': undefined}
  },
  methods:{
    submit () {console.log('Usuário' + computed.fullUsername + 'Senha ' + password)}
  }
}
</script>

<style>
</style>
