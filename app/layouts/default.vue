<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-navigation-drawer>
        <v-img
          class="my-5 mx-auto"
          :width="100"
          aspect-ratio="16/9"
          contain
          src="/logo.png"
        />

        <v-list density="compact" nav>
          <v-list-subheader>Menu</v-list-subheader>

          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :prepend-icon="item.icon"
            :to="item.to"
            :title="item.title"
            :value="item.to"
            active-color="primary"
          />
        </v-list>
      </v-navigation-drawer>

      <v-main class="bg-blue-grey-lighten-5">
        <v-container fluid>
          <slot />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { menuItems } from '@/data/constants.js'
</script>