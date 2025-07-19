<template>
    <v-card elevation="0" class="pa-2" max-width="1000">
        <v-img
            src="https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo.png"
            alt="Logo"
            max-width="120"
            class="mx-auto mb-4"
            contain
        ></v-img>
        
        <v-card-title class="text-h5 font-weight-regular">
          Login to your account
        </v-card-title>

        <v-card-subtitle class="text-body-2 mb-4">
          Welcome back! Please enter your credentials.
        </v-card-subtitle>

        <v-form @submit.prevent="login">
          <v-text-field
            v-model="form.fullname"
            label="Full Name"
            type="text"
            variant="outlined"
            class="mb-2"
            require>
            </v-text-field>

          <v-text-field
            v-model="form.username"
            label="Username"
            type="text"
            variant="outlined"
            class="mb-2"
            required>
        </v-text-field>

          <v-btn
            color="primary"
            block
            rounded="lg"
            size="large"
            class="text-none"
            type="submit">
            Login
          </v-btn>
        </v-form>

        <!-- <v-card-text class="mt-8 text-body-2 text-grey-darken-1 text-center">
          Don’t have an account?
          <a
            href="#"
            class="text-primary text-decoration-underline"
          >
            Create one
          </a>
        </v-card-text> -->

        <!-- <v-card-text class="text-caption text-grey text-center">
          By logging in, you accept our
          <a
            href="/terms"
            target="_blank"
            class="text-primary text-decoration-underline"
          >
            terms of use
          </a>
          and
          <a
            href="/policies"
            target="_blank"
            class="text-primary text-decoration-underline"
          >
            policies
          </a>.
        </v-card-text> -->
      </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({
  fullname: '',
  username: ''
})

const login = () => {
  if (!form.value.fullname || !form.value.username) {
    alert('Please fill in both fields.')
    return
  }

  console.log(form.value)

//   // Save to localStorage (mock auth)
//   localStorage.setItem('user', JSON.stringify(form.value))

  // Navigate to dashboard
  router.push('/home')
}
</script>
