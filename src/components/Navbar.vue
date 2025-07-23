<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useUserStore } from '../stores/userStore'
import { useAvatarStore } from '../stores/avatarStore'
import Logo from '../components/icons/iskonek.svg'

const router = useRouter()

const userStore = useUserStore()
const avatarStore = useAvatarStore()

const logout = () =>  {
  userStore.clearUser()
  router.push('/')
}

onMounted(() => {
  userStore.loadUser()
  avatarStore.loadAvatar()
})

const user = ref({
  name: 'John Doe',
})
</script>

<template>
  <v-app-bar app color="white" class="py-2"   elevate-on-scroll>
    <v-container class="d-flex align-center justify-space-between">
      <!-- Logo -->
      <v-toolbar-title class="text-h6 mt-3 font-weight-bold d-flex align-center">
        <img :src="Logo" alt="Logo" height="42" class="mr-2" />
      </v-toolbar-title>

      <!-- Desktop Menu (md and up) -->
      <div class="d-none d-md-flex align-center gap-4">
        <v-btn text to="/home" size="large" class="text-capitalize">Home</v-btn>
        <v-btn text to="/pre-match" size="large" class="text-capitalize">Match</v-btn>

        <v-menu offset-y>
          <template #activator="{ props }">
            <v-btn v-bind="props" class="d-flex align-center text-none" variant="text">
              <v-avatar size="32" class="mr-2">
                <img :src="avatarStore.avatar" alt="Avatar" />
              </v-avatar>
              <!-- <span class="text-body-1 font-weight-medium">{{ user.name }}</span> -->
              <v-icon end>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <div class="d-flex align-center">
                <v-icon class="mr-2">mdi-account</v-icon>
                <v-list-item-title class="font-weight-medium">{{ userStore.user.username }}</v-list-item-title>
              </div>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item @click="logout">
              <div class="d-flex align-center">
                <v-icon class="mr-2" color="red-accent-4">mdi-logout</v-icon>
                <v-list-item-title>Logout</v-list-item-title>
              </div>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- Mobile Hamburger (sm only) -->
      <div class="d-md-none">
        <v-menu offset-y>
          <template #activator="{ props }">
            <v-btn icon v-bind="props">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item to="/">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item to="/pre-match">
              <v-list-item-title>Match</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-title class="font-weight-medium">{{ user.name }}</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
              <v-icon>mdi-account</v-icon>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-container>
  </v-app-bar>
</template>


<style scoped>
img {
  max-height: 42px;
}
</style>
