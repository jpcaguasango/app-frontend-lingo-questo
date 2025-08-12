<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <LQTitle
          icon="mdi-book-play-outline"
          text="Información del escenario"
        />

        <div class="py-5 px-8 d-flex">
          <v-row>
            <v-col cols="12">
              <div class="d-flex justify-space-between ga-4">
                <LQLabelText
                  label="Tema"
                  text="Practicing Startup Interview Skills"
                />
                <LQLabelText label="Rol del usuario" text="interviewee" />
                <LQLabelText label="Rol del asistente" text="interviewer" />
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col cols="12">
        <LQTitle icon="mdi-message-text-outline" text="Descripción completa" />

        <p class="px-8 mt-2 text-grey-darken-1">
          You are preparing for a startup interview, and I will act as the
          interviewer. I will ask you various questions related to your skills,
          experience, and views on entrepreneurship. Let's practice your
          responses and make sure you feel confident going into the interview.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import LQTitle from '@/components/LQTitle.vue'
import LQLabelText from '@/components/LQLabelText.vue'
</script>
