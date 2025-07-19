<template>
  <v-app-bar color="primary" dark flat app>
    <!-- App Name or Logo -->
    <v-toolbar-title class="font-weight-bold">
      <v-icon left>mdi-twitter</v-icon> SunnySocial
    </v-toolbar-title>

    <!-- Spacer pushes items to the right -->
    <v-spacer />

    <!-- Nav Buttons -->
    <v-btn icon>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-message</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <!-- Avatar -->
    <v-menu offset-y>
      <template #activator="{ props }">
        <v-avatar v-bind="props" class="ml-2" size="32">
          <v-img src="https://i.pravatar.cc/150?img=3" />
        </v-avatar>
      </template>
      <v-list>
        <v-list-item title="Profile" @click="goToProfile" />
        <v-list-item title="Logout" @click="logout" />
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToProfile = () => {
  router.push('/profile')
}

const logout = () => {
  localStorage.removeItem('user')
  router.push('/login')
}
</script>
