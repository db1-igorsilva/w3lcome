<template>
  <center>
    <div class="not_full_width">
        <v-form @submit.prevent="save()">

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

        <br>

        <v-text-field
            label="Filter by Guest"
            id="typedFilter"
            name="typedFilter"
            class="not_full_width"
            v-model="typedFilter"/>

        <v-data-table :headers="headers" :items="filteredVisits()" class="not_full_width elevation-1">
            <template v-slot:items="filteredVisits">
                <td> {{ filteredVisits.item.id }} </td>
                <td style="word-break: break-all"> {{ filteredVisits.item.name }} </td>
                <td> {{ filteredVisits.item.relationshipType }} </td>
                <td> <v-btn class="button" @click="remove(filteredVisits.item)"> Delete </v-btn> </td>
            </template>
        </v-data-table>
    </div>
  </center>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Guest from '@/domain/guest/Guest.entity'
import GuestService from '@/domain/guest/Guest.service'

@Component({})
export default class NewGuest extends Vue {
    headers = [
        {
            text: 'ID',
            align: 'left',
            value: 'id'
        },
        {
            text: 'Name',
            value: 'name'
        },
        {
            text: 'Relationship Type',
            value: 'relationshipType'
        },
        {
            text: 'Delete',
            value: 'delete'
        }
    ];
    guest = new Guest(null, '', null);
    guests: Guest[] = [];
    typedFilter = '';

    filteredVisits () {
      if (this.typedFilter) {
        let wordFilter = new RegExp(this.typedFilter.trim(), 'i')
        return this.guests.filter(guest => wordFilter.test(guest.name))
      }
      return this.guests
    }

    save () {
        GuestService.save(this.guest).then(response => {
            this.guests.push(response.data);
        });
        this.guest = new Guest(null, '', null);
    }

    remove (guest: Guest) {
        GuestService.delete(guest)
            .then(() => {
                let index = this.guests.indexOf(guest)
                this.guests.splice(index, 1)
            },
            error => {
                console.log(error)
            })
    }

    created () {
        GuestService.getAll()
            .then(getResponse => {
                this.guests = getResponse.data
            })
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
