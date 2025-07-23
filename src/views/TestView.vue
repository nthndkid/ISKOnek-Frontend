<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'

const url = import.meta.env.VITE_LAMBDA_API


const data = ref(null)
const error = ref(null)

const fetchData = async () => {
  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'spring.cloud.function.definition': 'getUsers',
      }
    })
    data.value = response.data
    console.log(response.data)
  } catch (err) {
    error.value = err
    console.error(err.response || err)
  }
}

onMounted(fetchData)
</script>

<template>
  <v-container>
    <h1>Hello</h1>

    <v-alert v-if="error" type="error" class="mb-4">
      {{ error.message }}
    </v-alert>

    <v-card>
      <v-card-title>API Response</v-card-title>
      <v-card-text>
        <pre>{{ data }}</pre>
      </v-card-text>
    </v-card>
  </v-container>
</template>