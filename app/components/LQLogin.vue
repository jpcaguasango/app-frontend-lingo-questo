<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="rounded-xl border-thin">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Ingresa tu Nickname</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                class="mx-2"
                v-model="nickname"
                label="Nickname"
                variant="outlined"
                prepend-inner-icon="mdi-account"
                type="text"
                color="primary"
                rounded
                required
              ></v-text-field>
              <v-card-actions>
                <v-btn variant="elevated" color="primary" size="large" type="submit" rounded block>Entrar al Chat</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const nickname = ref('');
const emit = defineEmits(['loggedIn']);

const login = () => {
  if (nickname.value) {
    sessionStorage.setItem('nickname', nickname.value);
    emit('loggedIn', nickname.value);
  }
};
</script>