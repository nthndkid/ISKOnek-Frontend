<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'
import { useAvatarStore } from '../stores/avatarStore'
import { generateAvatar } from '../utils/avatarGenerator'
import Logo from '../components/icons/iskonek.svg'
import LoadingOverlay from '../components/LoadingOverlay.vue'

const loading = ref(false)

const router = useRouter()

const userStore = useUserStore()

const avatarStore = useAvatarStore()

const url = import.meta.env.VITE_LAMBDA_API

const form = ref({
  username: '',
  id: ''
})

const login = async () => {
  if (!form.value.id || !form.value.username) {
    alert('Please fill in both fields.')
    return
  }

  console.log(form.value)
  loading.value = true

  const avatar = generateAvatar() 
  avatarStore.setAvatar(avatar)

  try{
    const response = await axios.post(url, form.value, 
    {
      headers: {
        'Content-Type': 'application/json',
        'spring.cloud.function.definition': 'saveUser',
      }
    })

    const user = response.data
    userStore.setUser(user)
    router.push('/home')

  } catch (error) {
    alert('Login failed')
    console.error(error)
  } finally {
    loading.value = false
  }

}
</script>

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
            v-model="form.username"
            label="Username"
            type="text"
            variant="outlined"
            rounded="lg"  
            class="mb-2"
            required
          >
          </v-text-field>

          <v-text-field
            v-model="form.id"
            label="PUP Student ID"
            type="text"
            variant="outlined"
            rounded="lg"  
            class="mb-2"
            require
          >
            </v-text-field>

          <v-btn
            color="red-darken-3"
            block
            rounded="lg"
            size="x-large"
            class="text-none"
            type="submit"
          >
            <span>Get Started</span>
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

    <LoadingOverlay :loading="loading" message="Getting things ready..." />
</template>