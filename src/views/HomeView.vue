<script setup>
import Navbar from '../components/Navbar.vue';
import HeroSection from '../components/HeroSection.vue';

</script>


<template>
  <Navbar />
    <v-container
      fluid
      class="d-flex align-center justify-center"
      style="min-height: 100vh; transform: translateY(-15%);"
    >
     <HeroSection  />
    </v-container>

</template>
