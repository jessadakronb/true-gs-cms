<template>
  <v-card>
    <v-card-text>
      <div class="d-flex flex-wrap justify-space-between align-center">
        <h3 class="media-center-title">Media Center</h3>
        <v-btn><i class="mdi mdi-plus"></i>Add New</v-btn>
      </div>
      <br />
      <v-divider class="mb-5"></v-divider> <!-- Add margin-top here -->
      <div class="d-flex align-center">
        <v-text-field v-model="search" label="Search" class="mr-3" hide-details></v-text-field>
        <!-- First Dropdown -->
        <v-select v-model="selectedOption1" class="mr-3" :items="dropdownOptions1" label="Dropdown 1" hide-details></v-select>
        <!-- Second Dropdown -->
        <v-select v-model="selectedOption2" class="mr-3" :items="dropdownOptions2" label="Dropdown 2" hide-details></v-select>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const search = ref('');
const selectedOption1 = ref(null as string | null);
const selectedOption2 = ref(null as string | null);
const dropdownOptions1 = ref(['Option 1', 'Option 2', 'Option 3']);
const dropdownOptions2 = ref(['Option A', 'Option B', 'Option C']);


</script>