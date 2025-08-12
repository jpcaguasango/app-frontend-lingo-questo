<script setup lang="ts">
import LQTitle from '@/components/LQTitle.vue'
import LQStageInformation from '@/components/LQStageInformation.vue'
import LQAssessmentConfiguration from '@/components/LQAssessmentConfiguration.vue'
import LQStatistics from '@/components/LQStatistics.vue'
import LQPracticeWord from '@/components/LQPracticeWord.vue'
import LQPracticePhrases from '@/components/LQPracticePhrases.vue'
import { chatItems } from '@/data/constants'

const tab = ref('words')
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-card class="rounded-xl border-thin" variant="flat">
        <v-container fluid>
          <v-row>
            <v-col>
              <div class="d-flex ga-4">
                <v-avatar class="rounded-lg" size="80">
                  <v-img
                    src="/profile.jpeg"
                  ></v-img>
                </v-avatar>

                <div class="w-100 d-flex justify-space-between">
                  <div class="d-flex flex-column ga-5">
                    <LQTitle text="Preparing for a Startup Interview" />

                    <div class="d-flex align-end ga-2">
                      <v-chip
                        color="success"
                        variant="outlined"
                        prepend-icon="mdi-check-decagram-outline"
                        size="small"
                      >
                        Completado
                      </v-chip>

                      <v-chip
                        variant="outlined"
                        prepend-icon="mdi-calendar"
                        size="small"
                      >
                        07/08/2025, 11:59
                      </v-chip>
                    </div>
                  </div>

                  <div>
                    <LQTitle icon="mdi-star-outline" text="Nota Actual" />

                    <p class="ml-8">No tiene calificaciones</p>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>

    <v-col cols="12">
      <LQStatistics />
    </v-col>

    <v-col cols="12" md="6">
      <v-card min-height="380" class="rounded-xl border-thin" variant="flat">
        <LQStageInformation />
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card min-height="380" class="rounded-xl border-thin" variant="flat">
        <LQAssessmentConfiguration />
      </v-card>
    </v-col>

    <v-col>
      <div class="bg-white rounded-xl border-thin">
        <v-tabs class="text-none rounded-t-xl" color="primary" v-model="tab" bg-color="white">
          <v-tab class="text-none" value="words">
            <v-icon class="mr-2" icon="mdi-book-outline"></v-icon>
            Palabras y frases
          </v-tab>
          <v-tab class="text-none" value="conversations">
            <v-icon class="mr-2" icon="mdi-chat-outline"></v-icon>
            Conversación
          </v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="words">
            <v-container>
              <v-row>
                <v-col>
                  <LQPracticeWord />
                </v-col>

                <v-col>
                  <LQPracticePhrases />
                </v-col>
              </v-row>
            </v-container>
          </v-tabs-window-item>
          <v-tabs-window-item value="conversations">
            <v-container>
              <v-row>
                <v-col>
                  <LQChat :items="chatItems"/>
                </v-col>
                <v-col cols="12" md="4">
                  <v-row>
                    <v-col cols="12">
                      <LQConversationMetrics />
                    </v-col>
                    <v-col cols="12">
                      <LQConversationRating />
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-tabs-window-item>
        </v-tabs-window>
      </div>
    </v-col>
  </v-row>
</template>
