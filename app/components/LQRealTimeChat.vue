<template>
  <v-container class="bg-white rounded-xl border-thin">
    <v-toolbar class="rounded-xl" color="primary" dark>
      <v-toolbar-title>Chat de Voz</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text> Hola, {{ userNickname }}</v-btn>

        <v-btn icon="mdi-exit-to-app" @click="logout"></v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <div class="d-flex flex-column" style="height: calc(100vh - 150px)">
      <v-container class="bg-blue-grey-lighten-5 rounded-xl my-5 flex-grow-1 overflow-y-auto">
        <LQMessageList :messages="messages" :current-user="userNickname" />
      </v-container>

      <div>
        <LQVoiceRecorder @sendMessage="handleSendMessage" />
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import LQMessageList from '@/components/LQMessageList.vue'
import LQVoiceRecorder from '@/components/LQVoiceRecorder.vue'
import { v4 as uuidv4 } from 'uuid'

export type VoiceMessage = {
  id: string
  sender: string
  audioBlob: Blob
  duration: number
  timestamp: number
}

const props = defineProps<{
  userNickname: string
}>()

const messages = ref<VoiceMessage[]>([])
const channel = ref<BroadcastChannel | null>(null)

const emit = defineEmits(['logout']);

const handleSendMessage = (audioData: { blob: Blob; duration: number }) => {
  const message: VoiceMessage = {
    id: uuidv4(),
    sender: props.userNickname,
    audioBlob: audioData.blob,
    duration: audioData.duration,
    timestamp: Date.now(),
  }

  messages.value.push(message)
  channel.value?.postMessage(message)
}

const logout = () => {
  if (props.userNickname) {
    sessionStorage.removeItem('nickname');
    emit('logout');
  }
};

onMounted(() => {
  channel.value = new BroadcastChannel('voice-chat-channel')
  channel.value.onmessage = (event) => {
    const receivedMessage = event.data as VoiceMessage
    // Evitar que el mismo usuario reciba su propio mensaje
    if (receivedMessage.sender !== props.userNickname) {
      messages.value.push(receivedMessage)
    }
  }
})

onUnmounted(() => {
  channel.value?.close()
})
</script>
