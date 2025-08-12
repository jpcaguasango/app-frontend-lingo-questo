<template>
  <div class="d-flex flex-column ga-2">
    <small class="font-weight-bold">{{ label }}</small>

    <div>
      <v-chip
        :color="unlimited ? 'success' : 'error'"
        :prepend-icon="
          unlimited ? 'mdi-check-decagram-outline' : 'mdi-close-circle-outline'
        "
        variant="outlined"
        size="x-small"
      >
        {{ unlimited ? 'Ilimitado' : 'Limitado' }}
      </v-chip>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ConfigHelpItemType } from '@/types/global'

withDefaults(defineProps<ConfigHelpItemType>(), {
  label: '',
  unlimited: false,
})
</script>
