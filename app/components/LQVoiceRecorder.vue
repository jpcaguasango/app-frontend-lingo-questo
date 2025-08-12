<template>
  <div class="mb-5">
    <v-alert v-if="error" border="start" type="error" variant="tonal" rounded="xl" dense dismissible>
      {{ error }}
    </v-alert>
  </div>

  <div class="d-flex align-center justify-center">
    <v-btn
      icon
      size="x-large"
      :color="isRecording ? 'red' : 'primary'"
      @mousedown="startRecording"
      @mouseup="stopRecording"
      @touchstart="startRecording"
      @touchend="stopRecording"
      :loading="isLoading"
      :disabled="isLoading"
    >
      <v-icon
        >{{ isRecording ? 'mdi-microphone-off' : 'mdi-microphone' }}
      </v-icon>
    </v-btn>

    <div v-if="isRecording" class="ml-4">Grabando... {{ recordingTime }}s</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

const emit = defineEmits(['sendMessage'])

const isRecording = ref(false)
const isLoading = ref(false)
const recordingTime = ref(0)
const error = ref<string | null>(null)

let mediaRecorder: MediaRecorder | null = null
let audioChunks: Blob[] = []
let audioContext: AudioContext | null = null
let analyser: AnalyserNode | null = null
let timer: NodeJS.Timeout | null = null
const MAX_RECORDING_TIME = 30 // segundos

const startRecording = async () => {
  error.value = null
  recordingTime.value = 0
  audioChunks = []
  try {
    isLoading.value = true
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

    // Configurar AudioContext para la validación de silencio
    audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const source = audioContext.createMediaStreamSource(stream)
    analyser = audioContext.createAnalyser()
    source.connect(analyser)
    analyser.fftSize = 256

    mediaRecorder = new MediaRecorder(stream)
    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data)
    }

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/webm' })
      if (audioBlob.size > 1000) {
        // Un umbral simple para validar que no esté vacío
        emit('sendMessage', { blob: audioBlob, duration: recordingTime.value })
      } else {
        error.value = 'El audio está vacío o es muy corto.'
      }

      stream.getTracks().forEach((track) => track.stop())
    }

    mediaRecorder.start()
    isRecording.value = true
    isLoading.value = false

    timer = setInterval(() => {
      recordingTime.value++
      if (recordingTime.value >= MAX_RECORDING_TIME) {
        stopRecording()
      }
    }, 1000)
  } catch (err) {
    error.value =
      'No se pudo acceder al micrófono. Por favor, revisa los permisos.'
    console.error('Error al acceder al micrófono:', err)
    isLoading.value = false
  }
}

const stopRecording = () => {
  if (
    isRecording.value &&
    mediaRecorder &&
    mediaRecorder.state === 'recording'
  ) {
    mediaRecorder.stop()
    isRecording.value = false
    if (timer) {
      clearInterval(timer)
    }
  }
}

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop()
  }
})
</script>
