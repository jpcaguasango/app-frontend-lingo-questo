<template>
  <div ref="waveformContainer"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import WaveSurfer from 'wavesurfer.js';

const props = defineProps<{
  audioUrl: string;
  color: string
}>();

const emit = defineEmits(['playing', 'paused', 'finished']);

const waveformContainer = ref<HTMLDivElement | null>(null);
let wavesurfer: WaveSurfer | null = null;

onMounted(() => {
  if (waveformContainer.value) {
    wavesurfer = WaveSurfer.create({
      container: waveformContainer.value,
      waveColor: props.color,
      progressColor: 'purple',
      cursorColor: 'navy',
      barWidth: 3,
      barRadius: 3,
      barGap: 2,
      height: 40,
    });

    wavesurfer.load(props.audioUrl);

    wavesurfer.on('play', () => emit('playing'));
    wavesurfer.on('pause', () => emit('paused'));
    wavesurfer.on('finish', () => emit('finished'));
  }
});

onUnmounted(() => {
  if (wavesurfer) {
    wavesurfer.destroy();
  }
});

const play = () => wavesurfer?.play();
const pause = () => wavesurfer?.pause();
const togglePlay = () => wavesurfer?.playPause();
const setPlaybackRate = (rate: number) => {
  if (wavesurfer) {
    wavesurfer.setPlaybackRate(rate);
  }
};

defineExpose({
  play,
  pause,
  togglePlay,
  setPlaybackRate,
});

watch(() => props.audioUrl, (newUrl) => {
  if (wavesurfer && newUrl) {
    wavesurfer.load(newUrl);
  }
});

</script>