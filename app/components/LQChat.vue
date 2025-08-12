<template>
  <v-card class="rounded-xl border-thin overflow-y-scroll" max-height="525px" variant="flat">
    <v-container>
      <v-row
        v-for="(item, index) in items"
        :key="index"
        :justify="item.author === 'Interviewer' ? 'start' : 'end'"
      >
        <v-col cols="10">
          <p class="mb-2 font-weight-bold">{{item.author}}</p>
          <LQChatItem :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import type { ChatItemType } from '@/types/global'
import LQChatItem from '@/components/LQChatItem.vue'

type Props = {
  items: ChatItemType[]
}

defineProps<Props>()
</script>
