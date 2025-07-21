<template>
    <v-card elevation="0" class="pa-2" max-width="500" width="100%">
        <v-img
            :src="Logo"
            alt="Logo"
            max-width="190"
            class="mx-auto mb-4"
            contain
        ></v-img>
        
        <!-- For desktop -->
        <v-card-title
          class="text-h6 mb-4 text-center font-weight-regular d-none d-sm-block"
        >
          Your network of fellow Iskolars begins here.
        </v-card-title>

        <!-- For mobile -->
        <v-card-title
          class="text-body-2 mb-4 text-center font-weight-regular d-sm-none"
        >
          Your network of fellow Iskolars begins here.
        </v-card-title>


        <v-form @submit.prevent="login">
          <v-text-field
            v-model="form.fullname"
            label="Full Name"
            type="text"
            variant="outlined"
            rounded="lg"  
            class="mb-2"
            require>
            </v-text-field>

          <v-text-field
            v-model="form.username"
            label="Username"
            type="text"
            variant="outlined"
            rounded="lg"  
            class="mb-2"
            required>
        </v-text-field>

          <v-btn
            color="red-darken-3"
            block
            rounded="lg"
            size="x-large"
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
import Logo from '../components/icons/iskonek.svg'

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
