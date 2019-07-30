<template>
  <center>
        <v-form class="not_full_width" @submit.prevent="save()">

            <v-text-field
                label="Guest Name"
                :counter="160"
                v-validate="'required'"
                id="guest"
                name="guest"
                v-model="visit.guest"/>
            <span v-show="errors.has('guest')"> Field "Guest Name" can't be null </span>

            <v-text-field
                label="W3lcome Text"
                :counter="500"
                v-validate="'required'"
                id="welcomeText"
                name="welcomeText"
                v-model="visit.welcomeText"/>
            <span v-show="errors.has('welcomeText')"> Field "W3lcome Text" can't be null </span>

            <div class="datetime">
                <label class="datetime time_label"> Visit Date </label>
                <input type="date" v-validate="'required'" id="date" name="date" class="datetime__field" v-model="visit.date"/>

                <label class="datetime time_label"> Presentation Start </label>
                <input type="time" id="presentationStartTime" name="presentationStartTime" class="datetime__field" v-model="visit.presentationStartTime"/>

                <label class="datetime time_label"> Presentation End </label>
                <input type="time" id="presentationEndTime" name="presentationEndTime" class="datetime__field" v-model="visit.presentationEndTime"/>
            </div>

            <v-form class="not_full_width" @submit.prevent="addPerson()">
                <v-text-field
                    label="Person"
                    :counter="160"
                    id="name"
                    name="name"
                    v-model="person"/>
                <v-btn class="button" type="submit"> ADD PERSON </v-btn>
            </v-form>

            <table class="half_width">
                <tr>
                    <td> NAME </td>
                    <td> DELETE </td>
                </tr>
                <tr v-for="(visitPerson, per) of onCreatePersons" :key="per">
                    <td> {{ visitPerson.person }} </td>
                    <td> <button @click.prevent="removeFromCreatedPersons(visitPerson)"> X </button> </td>
                </tr>
                <tr v-for="(person, p) of persons" :key="`A-${p}`">
                    <td> {{ person }} </td>
                    <td> <button @click.prevent="removeFromPersons(person)"> X </button> </td>
                </tr>
            </table>
            <v-btn class="button" type="submit"> SUBMIT </v-btn>

        </v-form>
    </center>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Visit from '@/domain/visit/Visit.entity'
import VisitService from '@/domain/visit/Visit.service'
import VisitPerson from '@/domain/visitPerson/VisitPerson.entity'
import VisitPersonService from '@/domain/visitPerson/VisitPerson.service'

@Component
export default class NewVisit extends Vue {
  visit = new Visit({}, {}, {}, {}, '', '');
    id = this.$route.params.id;
    onCreatePersons = <string[]>[];
    persons = <string[]>[];
    person = '';
    save () {
      VisitService.save(this.visit)
        .then(response => {
          let idToSave = response.data.id
          this.persons
            .map(person => {
              VisitPersonService.save(person, idToSave)
            })
        })
        .then(() => {
          this.$router.push({ name: 'visits' })
        })
    }

    addPerson () {
      if (this.person) {
        this.persons.push(this.person)
      } else {
        alert('Every person needs to have a name.')
      }
    }

    removeFromCreatedPersons (visitPerson: string) {
      VisitPersonService.delete(visitPerson)
        .then(() => {
          let index = this.onCreatePersons.indexOf(visitPerson)
          this.onCreatePersons.splice(index, 1)
        },
        (error: any) => {
          console.log(error)
        })
    }

    removeFromPersons (person: string) {
      let index = this.persons.indexOf(person)
      this.persons.splice(index, 1)
    }

    created () {
      if (this.id) {
        VisitService.find(this.id)
          .then(visit => {
            this.visit = visit.data
          })
        VisitPersonService.getAll().then((response: any) => {
          let filteredResponse = response.data.filter((resp: any) => this.id === resp.visit)
          this.onCreatePersons = filteredResponse
        })
      }
    }
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
