<template>
  <v-card class="rounded-xl border-thin" variant="flat">
    <v-container>
      <LQTitle
        icon="mdi-star-outline"
        text="Calificación de la Conversación"
      />

      <div class="py-5 px-8">
        <v-row>
          <v-col
            cols="6"
            v-for="(item, index) in conversationRating"
            :key="index"
          >
            <LQLabelText
              :icon="item.icon"
              :label="item.label"
              :text="item.value"
            />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { conversationRating } from '@/data/constants'
import LQTitle from '@/components/LQTitle.vue'
import LQLabelText from '@/components/LQLabelText.vue'
</script>

