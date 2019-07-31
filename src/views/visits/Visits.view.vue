<template>
  <center>
        <div class="not_full_width">
            <div class="datetime">
              <v-text-field
                label="Guest"
                id="guest"
                name="guest"
                v-model="typedFilter"/>
              <label class="datetime time_label"> First Date </label>
              <input type="date" id="compareStartDate" name="compareStartDate" class="datetime__field" @input="compareStartDate = $event.target.value"/>
              <label class="datetime time_label"> Last Date </label>
              <input type="date" id="compareEndDate" name="compareEndDate" class="datetime__field" @input="compareEndDate = $event.target.value"/>
            </div>

            <br>

            <v-data-table :headers="headers" :items="filteredVisits()" class="not_full_width elevation-1">
                <template v-slot:items="filteredVisits">
                    <td> {{ filteredVisits.item.id }} </td>
                    <td> {{ filteredVisits.item.date }} </td>
                    <td> {{ filteredVisits.item.presentationStartTime }} </td>
                    <td> {{ filteredVisits.item.presentationEndTime }} </td>
                    <td> {{ filteredVisits.item.guest }} </td>
                    <td> {{ filteredVisits.item.welcomeText }} </td>
                    <td> <router-link style="text-decoration: none" :to="{name: 'update', params: { id: filteredVisits.item.id }}"> <v-btn class="button"> Update </v-btn> </router-link> </td>
                    <td> <v-btn class="button" @click="remove(filteredVisits.item)"> Delete </v-btn> </td>
                </template>
            </v-data-table>
        </div>
    </center>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Visit from '@/domain/visit/Visit.entity'
import VisitService from '@/domain/visit/Visit.service'
import VisitPerson from '../../domain/visitPerson/VisitPerson.entity';
import VisitPersonService from '../../domain/visitPerson/VisitPerson.service';

@Component({})
export default class Visits extends Vue {
  headers = [
    {
      text: 'ID',
      align: 'left',
      value: 'id'
    },
    {
      text: 'Date',
      value: 'visit_date'
    },
    {
      text: 'Presentation Start',
      value: 'start_time'
    },
    {
      text: 'Presentation End',
      value: 'end_time'
    },
    {
      text: 'Guest',
      value: 'guest'
    },
    {
      text: 'W3lcome Text',
      value: 'welcome_text'
    },
    {
      text: 'Update',
      value: 'update'
    },
    {
      text: 'Delete',
      value: 'remove'
    }
  ];
    visits: Visit[] = [];
    typedFilter = '';
    compareStartDate = '';
    compareEndDate = '';

    filteredVisits () {
      if (this.compareStartDate && this.compareEndDate && this.typedFilter) {
        let wordFilter = new RegExp(this.typedFilter.trim(), 'i')
        return this.visits.filter(visit => new Date(visit.date) >= new Date(this.compareStartDate) && new Date(visit.date) <= new Date(this.compareEndDate)).filter(visit => wordFilter.test(visit.guest))
      }
      if (this.compareStartDate && this.compareEndDate) {
        return this.visits.filter(visit => new Date(visit.date) >= new Date(this.compareStartDate) && new Date(visit.date) <= new Date(this.compareEndDate))
      }
      if (this.typedFilter) {
        let wordFilter = new RegExp(this.typedFilter.trim(), 'i')
        return this.visits.filter(visit => wordFilter.test(visit.guest))
      }
      return this.visits
    }

    // CHANGE TO CASCADE DELETE LATER
    remove (visit: Visit) {
      let allPersons: any = VisitPersonService.getAll().then(resp => console.log(resp.data.value));
      VisitService.delete(visit)
        .then(() => {
          let index = this.visits.indexOf(visit)
          this.visits.splice(index, 1)
        },
        error => {
          console.log(error)
        })
    }

    created () {
      VisitService.getAll()
        .then(getResponse => {
          this.visits = getResponse.data
        })
    }
}
</script>

<style lang="sass">
.not_full_width
    width: 95%
.button
    border: 1px solid black
    text-decoration: none
.datetime__field
    border-bottom: 1px solid #888
    padding: 1%
    padding-bottom: 0.5%
    padding-left: 0
.datetime
    width: 100%
    height: 75%
    display: flex
    flex-direction: column
    text-align: left
    .time_label
        padding-top: 10px
</style>
