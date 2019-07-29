<template>
  <center>
        <div class="not_full_width">
            <v-flex @input="typed_filter = $event.target.value">
                <v-text-field label="Guest Name"/>
            </v-flex>
            <div class="datetime">
                <label class="datetime time_label"> First Date </label>
                <input type="date" id="compareStartDate" name="compareStartDate" class="datetime__field" @input="compareStartDate = $event.target.value"/>
                <label class="datetime time_label"> Last Date </label>
                <input type="date" id="compareEndDate" name="compareEndDate" class="datetime__field" @input="compareEndDate = $event.target.value"/>
            </div>

            <br>

            <v-data-table :headers="headers" :items="filteredVisits" class="not_full_width elevation-1">
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
import { Component, Vue } from 'vue-property-decorator';

export default class Visits extends Vue {}
</script>
