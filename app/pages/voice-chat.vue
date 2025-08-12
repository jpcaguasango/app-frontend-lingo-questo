<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LQLogin from '@/components/LQLogin.vue'
import LQRealTimeChat from '@/components/LQRealTimeChat.vue'

const nickname = ref<string | null>(null)

const handleLogin = (newNickname: string) => {
  nickname.value = newNickname
}

const handleLogout = () => {
  nickname.value = null
}

onMounted(() => {
  const storedNickname = sessionStorage.getItem('nickname')
  if (storedNickname) {
    nickname.value = storedNickname
  }
})
</script>

<template>
  <div v-if="!nickname">
    <LQLogin @loggedIn="handleLogin" />
  </div>
  <div v-else>
    <LQRealTimeChat :userNickname="nickname" @logout="handleLogout"/>
  </div>
</template>
