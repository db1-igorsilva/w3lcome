<template>
  <v-app id="app">
    <Menu> </Menu>
    <section>
      <router-view></router-view>
    </section>
  </v-app>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import Menu from '@/shared/Menu.vue'

@Component({
  components: {
    Menu
  }
})
export default class App extends Vue {}

</script>

<style lang='sass'>
#app
  font-family: 'Flexo', sans-serif
input:focus,
select:focus,
textarea:focus,
button:focus
  outline: none
</style>
