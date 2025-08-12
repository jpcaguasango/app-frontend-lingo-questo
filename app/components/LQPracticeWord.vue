<template>
  <LQSubtitle text="Palabras practicadas" />

  <div class="py-5">
    <v-expansion-panels>
      <LQExpansionPanel
        v-for="(item, index) in practicedWords"
        :key="index"
        :title="item.title"
        :result="item.result"
      />
    </v-expansion-panels>
  </div>
</template>

<script setup lang="ts">
import { practicedWords } from '@/data/constants'
import LQSubtitle from '@/components/LQSubtitle.vue'
</script>
