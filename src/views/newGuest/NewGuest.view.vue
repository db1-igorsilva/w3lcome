<template>
  <center>
    <div class="not_full_width">
      <v-form class="not_full_width">

        <v-text-field
            label="Guest"
            :counter="160"
            id="name"
            name="name"
            v-model="guest.name"/>

        <v-text-field
            label="Relationship Type"
            id="relationshipType"
            name="relationshipType"
            v-model="guest.relationshipType"/>

        <v-btn class="button" type="submit"> SUBMIT </v-btn>

      </v-form>
    </div>
  </center>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class NewVisit extends Vue {
}
</script>

<style lang="sass">
.not_full_width
    width: 95%
    height: 100%
.datetime
    width: 100%
    height: 75%
    display: flex
    flex-direction: column
    text-align: left
    .time_label
        padding-top: 10px
.button
    border: 1px solid black
.datetime__field
    border-bottom: 1px solid #888
    padding: 1%
    padding-bottom: 0.5%
    padding-left: 0
</style>
