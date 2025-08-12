<template>
  <v-card class="rounded-xl border-thin" variant="flat">
    <v-container>
      <LQTitle
        icon="mdi-invoice-text-fast-outline"
        text="Metricas de Conversación"
      />

      <div class="py-5 px-8">
        <v-row>
          <v-col
            cols="6"
            v-for="(item, index) in conversationMetrics"
            :key="index"
          >
            <LQLabelText
              :icon="item.icon"
              :label="item.label"
              :text="item.text"
            />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { conversationMetrics } from '@/data/constants'
import LQTitle from '@/components/LQTitle.vue'
import LQLabelText from '@/components/LQLabelText.vue'
</script>
