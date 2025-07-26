<script setup>
import Navbar from '../components/Navbar.vue';
import Matchmaking from '../components/Matchmaking.vue';
</script>

<template>
  <Navbar />
    <v-container
      fluid
      class="d-flex align-center justify-center mt-10"
      style="min-height: 10vh;"
    >
     <Matchmaking />
    </v-container>
</template>