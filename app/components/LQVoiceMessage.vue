<template>
  <div class="my-2 d-flex align-center justify-space-between">
    <div class="w-100 d-flex align-center">
      <v-btn
        :color="color"
        :disabled="!audioUrl"
        size="x-small"
        icon
        @click="togglePlay"
      >
        <v-icon>{{ isPlaying ? 'mdi-pause' : 'mdi-play' }}</v-icon>
      </v-btn>

      <div class="w-100 px-5 d-flex align-center">
        <div class="w-100 px-5">
          <LQAudioWaveForm
            :color="colorHex"
            ref="audioWaveformRef"
            :audio-url="audioUrl"
            v-if="audioUrl"
            @playing="isPlaying = true"
            @paused="isPlaying = false"
            @finished="onPlaybackFinished"
          />
        </div>

        <small>{{ formatDuration(message.duration) }}</small>
      </div>
    </div>

    <div class="d-flex ga-2">
      <v-btn
        :color="color"
        variant="outlined"
        size="x-small"
        icon
        @click="setPlaybackRate"
      >
        {{ currentPlaybackRate }}x
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { VoiceMessage } from '@/components/LQRealTimeChat.vue'
import LQAudioWaveForm from '@/components/LQAudioWaveForm.vue'

type Props = {
  message: VoiceMessage
  currentUser: string
}

const props = defineProps<Props>()

const audioUrl = ref<string | null>(null)
const isPlaying = ref(false)
const currentPlaybackRate = ref(1)

// Referencia para acceder al componente LQAudioWaveForm
const audioWaveformRef = ref<InstanceType<typeof LQAudioWaveForm> | null>(null)
const color = props.message.sender !== props.currentUser ? 'primary' : 'success'
const colorHex =
  props.message.sender !== props.currentUser ? '#6200ea' : '#00da65'

onMounted(() => {
  const audioBlob = props.message.audioBlob
  audioUrl.value = URL.createObjectURL(audioBlob)
})

onUnmounted(() => {
  if (audioUrl.value) {
    URL.revokeObjectURL(audioUrl.value)
  }
})

const togglePlay = () => {
  audioWaveformRef.value?.togglePlay()
}

const setPlaybackRate = () => {
  let playback: number
  switch (currentPlaybackRate.value) {
    case 1:
      playback = 1.5
      break
    case 1.5:
      playback = 2
      break
    default:
      playback = 1
  }

  audioWaveformRef.value?.setPlaybackRate(playback)
  currentPlaybackRate.value = playback
}

const onPlaybackFinished = () => {
  isPlaying.value = false
}

const formatDuration = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}
</script>
