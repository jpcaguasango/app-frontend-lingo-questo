<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <LQTitle icon="mdi-cog-outline" text="Configuración de la evaluación" />

        <div class="py-5 px-8 d-flex">
          <v-row>
            <v-col cols="12">
              <div class="d-flex justify-space-between ga-4">
                <LQLabelText label="Nombre" text="Evaluation Setting" />
                <LQLabelText label="Idioma" text="English" />
                <LQLabelText label="Nivel" text="A2" />
                <LQLabelText label="Tiempo mínimo" text="15 minutos" />
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12">
        <LQTitle icon="mdi-cogs" text="Configuración de ayudas" />

        <v-container class="px-8">
          <v-row>
            <v-col cols="4" v-for="(item, index) in configHelps" :key="index">
              <LQConfigHelpItem
                :label="item.label"
                :unlimited="item.unlimited"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { configHelps } from '@/data/constants'
import LQTitle from '@/components/LQTitle.vue'
import LQLabelText from '@/components/LQLabelText.vue'
</script>
