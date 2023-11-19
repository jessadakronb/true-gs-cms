<template>
  <v-card>
    <v-card-text>
      <div class="d-flex flex-wrap justify-space-between align-center">
        <h3 class="media-center-title">Media Center</h3>
        <v-btn><i class="mdi mdi-plus"></i>Add New</v-btn>
      </div>
      <br />
      <div class="media-center-upload mt-3">
        <v-card color="#dae3f5">
          <v-card-text>
            <div class="d-flex justify-center">DropFile To Upload</div>
            <div class="d-flex justify-center">or</div>
            <div class="d-flex justify-center mt-3">
              <v-btn color="#6672FB">Select File</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <br />
      <div class="d-flex align-center">
        <v-text-field v-model="search" class="mr-3" rounded hide-details>
          <searchIcon></searchIcon>
        </v-text-field>
        <!-- First Dropdown -->
        <v-select v-model="selectedOption1" class="mr-3" :items="dropdownOptions1" label="Dropdown 1"
          hide-details></v-select>
        <!-- Second Dropdown -->
        <v-select v-model="selectedOption2" class="mr-3" :items="dropdownOptions2" label="Dropdown 2"
          hide-details></v-select>
      </div>
      <v-divider class="mb-5 mt-5"></v-divider>
      <div class="media-center-gallery">
        <v-row>
          <v-col v-for="(item, index) in galleryItems" :key="index" cols="12" sm="6" md="4" lg="3">
            <v-card rounded class="mx-auto" max-width="400">
              <v-card-text>
                <v-card-title class="d-flex justify-space-between align-center">
                  <div class="text-h6">File Name</div>
                  <div>
                    <input type="checkbox">
                  </div>
                </v-card-title>
                <v-img :lazy-src="item" :src="item" :style="{ borderRadius: '20px' }"></v-img>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="d-flex justify-center align-center mt-3">
        <v-btn>Load more</v-btn>
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

const galleryItems = ref([
  'https://picsum.photos/200',
  'https://picsum.photos/200',
  'https://picsum.photos/200',
  'https://picsum.photos/200',
  'https://picsum.photos/200',
  'https://picsum.photos/200',
]);

</script>