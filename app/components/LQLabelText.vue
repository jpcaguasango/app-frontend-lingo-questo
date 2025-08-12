<template>
  <div class="d-flex flex-column">
    <div class="d-flex align-baseline">
      <v-icon v-if="icon" :icon="icon" size="medium" class="mr-2" />

      <small class="text-grey-darken-1">
        {{ label }}
      </small>
    </div>

    <div :class="icon ? 'ml-6' : ''">
      <small class="font-weight-bold">{{ text }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LabelTextType } from '@/types/global'

withDefaults(defineProps<LabelTextType>(), {
  icon: '',
  label: '',
  text: '',
})
</script>
