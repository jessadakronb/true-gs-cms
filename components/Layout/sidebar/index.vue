<script setup lang="ts">
import { markRaw, watch } from "vue";
import sidebarItems from "./sidebarItems";

const sidebarMenu = markRaw(sidebarItems);
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Navigation -->
  <!-- ---------------------------------------------- -->
  <perfect-scrollbar class="scrollnavbar">
    <v-list class="py-5 px-4 bg-muted" density="compact">
      <!---Menu Loop -->
      <template v-for="(item, i) in sidebarMenu">
        <!---Item Sub Header -->
        <LayoutSidebarNavGroup :item="item" v-if="item.header" :key="item.title" />
        <!---Single Item-->
        <LayoutSidebarNavItem :item="item" v-else class="leftPadding" />
        <!---End Single Item-->
        <template v-if="item.children">
          <template v-for="(childItem, j) in item.children" :key="j">
            <LayoutSidebarNavItem :item="childItem" class="leftPadding" />
          </template>
        </template>
      </template>
    </v-list>
  </perfect-scrollbar>
</template>
