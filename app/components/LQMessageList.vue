<template>
  <div>
    <div v-for="message in messages" :key="message.id">
      <v-card
        class="w-75 bg-white rounded-xl border-thin border-s-xl"
        :class="[
          'pa-3',
          'my-2',
          'border-primary',
          { 'border-success': message.sender === currentUser },
        ]"
        :style="{
          'margin-left': message.sender !== currentUser ? '0' : 'auto',
          'margin-right': message.sender === currentUser ? '0' : 'auto',
        }"
        variant="flat"
      >
        <div class="pb-2 font-weight-bold">{{ message.sender }}</div>
        <LQVoiceMessage :message="message" :currentUser="currentUser" />
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { VoiceMessage } from '@/components/LQRealTimeChat.vue'
import LQVoiceMessage from '@/components/LQVoiceMessage.vue'

defineProps<{
  messages: VoiceMessage[]
  currentUser: string
}>()
</script>
