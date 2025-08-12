<template>
  <div class="d-flex align-center">
    <v-icon v-if="icon" color="primary" :icon="icon" class="mr-2" />

    <span class="text-subtitle-2 font-weight-bold">
      {{ text }}
    </span>
  </div>
</template>

<script setup lang="ts">
type Props = {
  icon?: string
  text: string
}

withDefaults(defineProps<Props>(), {
  icon: '',
  text: '',
})
</script>