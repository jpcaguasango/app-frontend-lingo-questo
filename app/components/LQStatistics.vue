<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card class="rounded-xl border-thin" variant="flat">
        <v-container>
          <LQTitle icon="mdi-chart-bar-stacked" text="Metricas de desempeño" />

          <div class="py-5 px-8 d-flex flex-wrap justify-space-between ga-4">
            <LQLabelText
              v-for="(item, index) in performanceMetrics"
              :key="index"
              :icon="item.icon"
              :label="item.label"
              :text="item.text"
            />
          </div>
        </v-container>
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card class="rounded-xl border-thin" variant="flat">
        <v-container>
          <LQTitle icon="mdi-list-status" text="Estado de la practica" />

          <div class="py-5 px-8 d-flex flex-wrap justify-space-between ga-4">
            <LQLabelText
              v-for="(item, index) in statePractices"
              :key="index"
              :icon="item.icon"
              :label="item.label"
              :text="item.text"
            />
          </div>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { performanceMetrics, statePractices } from '@/data/constants'
import LQTitle from '@/components/LQTitle.vue'
import LQLabelText from '@/components/LQLabelText.vue'
</script>

