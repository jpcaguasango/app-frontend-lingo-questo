<template>
  <v-banner
    class="rounded-xl border-thin border-primary"
    :color="item.author === 'Interviewer' ? 'primary' : 'success'"
    icon="mdi-play-circle-outline"
  >
    <v-banner-text class="w-100">
      <small>{{ item.message }}</small>

      <div class="pt-2 d-flex justify-space-between font-weight-bold">
        <small>{{ item.duration }}</small>
        <small>{{ item.hour }}</small>
      </div>
    </v-banner-text>
  </v-banner>
</template>

<script setup lang="ts">
import type { ChatItemType } from '@/types/global'

type Props = {
  item: ChatItemType
}

defineProps<Props>()
</script>

