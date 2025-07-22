<script setup>
import Logo from '../components/icons/iskonek.svg'
</script>

<template>
  <v-container class="d-flex flex-column align-center justify-center text-center px-4" fluid>
    <!-- Heading -->
    <h1 class="text-h6 text-md-h5 font-weight-semibold mb-4">
      Welcome to
    </h1>

    <!-- Logo -->
    <v-img
      :src="Logo"
      :width="350"
      class="mx-auto mb-10"
      aspect-ratio="16/9"
      cover
    ></v-img>

    <!-- Subheading -->
    <p class="text-h6 text-md-h5 text-wrap mb-10">
      Find someone to study with, collaborate on projects, or just vibe with!
    </p>

    <!-- Button -->
    <v-btn
      color="blue-accent-3"
      size="x-large"
      rounded="pill"
      class="text-white mt-6 px-12 hover-scale"
      @click="submitForm"
    >
      Get Started
      <v-icon right>mdi-arrow-right</v-icon>
    </v-btn>
  </v-container>
</template>
