<template>
  <v-card>
    <v-card-text>
      <div class="d-flex flex-wrap justify-space-between align-center">
        <h2 class="mb-4 mb-md-0">User Overview (20)</h2>
        <div class="custom-buttons">
          <v-btn elevation="0" color="secondary" class="mr-2 mb-2 mb-md-0">
            <i class="mdi mdi-printer-outline"></i>Print</v-btn>
          <v-btn elevation="0" color="secondary" class="mr-2 mb-2 mb-md-0">
            <i class="mdi mdi-tray-arrow-down"></i>Import</v-btn>
          <v-btn elevation="0" color="secondary" class="mr-2 mb-2 mb-md-0">
            <i class="mdi mdi-tray-arrow-up"></i>Export</v-btn>
          <v-btn elevation="0" color="secondary">
            <i class="mdi mdi-plus"></i>Create New User</v-btn>
        </div>
      </div>
      <br />
      <hr/>
      <v-col cols="12" sm="12">
          <v-table>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name" class="table-row-hover">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr>
            </tbody>
          </v-table>
      </v-col>
    </v-card-text>
  </v-card>
</template>
<script setup>
import UiChildCard from '@/components/shared/UiChildCard.vue';
const desserts = ref([
  {
    name: "Frozen Yogurt",
    calories: 159,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
  },
  {
    name: "Eclair",
    calories: 262,
  },
  {
    name: "Cupcake",
    calories: 305,
  },
  {
    name: "Gingerbread",
    calories: 356,
  },
  {
    name: "Jelly bean",
    calories: 375,
  },
  {
    name: "Lollipop",
    calories: 392,
  },
  {
    name: "Honeycomb",
    calories: 408,
  },
  {
    name: "Donut",
    calories: 452,
  },
  {
    name: "KitKat",
    calories: 518,
  },
]);

</script>

<style scoped>
.table-row-hover:hover {
  background-color: #f0f0f0;
}
</style>