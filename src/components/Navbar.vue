<template>
  <v-container>
    <v-app-bar app color="white" class="px-10 py-2" dark>
      <!-- Logo Left -->
      <v-toolbar-title class="text-h6 font-weight-bold">
        <img :src="Logo" alt="Logo" height="32" class="mr-2" />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Nav Links -->
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/match">Match</v-btn>

      <!-- Profile Dropdown -->
      <v-menu>
        <template #activator="{ props }">
          <v-btn v-bind="props" icon>
            <v-avatar size="32">
              <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Profile" />
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Logo from '../components/icons/iskonek.svg'

const router = useRouter()

function logout() {
  // Simulate logout
  alert('Logged out!')
  router.push('/login')
}
</script>

<style scoped>
/* Optional: make logo responsive */
img {
  max-height: 32px;
}
</style>
