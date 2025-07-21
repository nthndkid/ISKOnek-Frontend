<template>
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-space-between">
      
      <!-- Left: Avatar and Navigation -->
      <div class="d-flex align-center">
        <v-avatar class="me-4" color="grey-darken-1" size="32"></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          :text="link"
          variant="text"
        ></v-btn>
      </div>

      <!-- Right: Search Field -->
      <v-responsive max-width="160">
        <v-text-field
          density="compact"
          label="Search"
          rounded="lg"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
      </v-responsive>
      
    </v-container>
  </v-app-bar>

  <v-app-bar :elevation="0">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>Application Bar</v-app-bar-title>

  <template v-slot:append>
    <v-btn icon="mdi-heart"></v-btn>

    <v-btn icon="mdi-magnify"></v-btn>

    <v-btn icon="mdi-dots-vertical"></v-btn>
  </template>
</v-app-bar>
</template>

<script setup>
const links = ['Home', 'Messages', 'Explore']
</script>
