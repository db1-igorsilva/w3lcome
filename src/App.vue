<template>
  <div id="app">
    <Menu> </Menu>
    <router-view/>
  </div>
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
</style>
