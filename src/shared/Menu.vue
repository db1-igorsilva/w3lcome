<template>
  <v-toolbar color="#8F1C2C" class="menu__header">
    <router-link to="/" class="menu__header_db1info">
        <img class="menu__header" src="https://db1global.sharepoint.com/sites/intranet/Central%20de%20documentos%20PDF/Imagens%20Oficiais/ORG_LOGO_DB1_BRANCO.png"/>
    </router-link>

    <v-spacer/>

    <v-toolbar-items>
        <router-link to="/" class="menu__header">
            <v-btn flat class="menu__header_button" style="color: #FFF"> Visits </v-btn>
        </router-link>
        <router-link to="/newVisit" class="menu__header">
            <v-btn flat class="menu__header_button" style="color: #FFF"> New Visit </v-btn>
        </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Menu extends Vue {}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
