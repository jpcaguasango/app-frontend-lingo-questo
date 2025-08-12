<template>
  <v-expansion-panel class="border-thin" height="60px" rounded="xl">
    <v-expansion-panel-title>
      <v-container fluid>
        <v-row justify="space-between" align="center">
          <v-col cols="8">
            <small>{{ title }}</small>
          </v-col>
          <v-col cols="4">
            <div class="d-flex justify-end ga-4">
              <v-btn
                color="primary"
                variant="outlined"
                size="x-small"
                icon="mdi-volume-high"
              />
              <v-btn
                color="primary"
                variant="outlined"
                size="x-small"
                icon="$vuetify"
              >
                1x
              </v-btn>
              <v-btn
                color="primary"
                variant="outlined"
                size="x-small"
                icon="mdi-translate"
              />
              <v-btn
                color="primary"
                variant="outlined"
                size="x-small"
                icon="$vuetify"
              >
                A2
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-container>
        <v-alert
          border="start"
          rounded="xl"
          color="primary"
          variant="tonal"
        >
          <div class="d-flex flex-column ga-4">
            <small class="font-weight-bold">{{ result.title }}</small>

            <div class="d-flex justify-space-between">
              <small>Puntuación: {{ result.score }}</small>
              <small>{{ result.date }}</small>
            </div>
          </div>
        </v-alert>
      </v-container>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup lang="ts">
import type { PracticeType } from '@/types/global'

defineProps<PracticeType>()
</script>
