<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    form: Object
})

const router = useRouter()

const interests = [
  { id: 1, interest: 'animals', emoji: '🐾' },
  { id: 2, interest: 'music', emoji: '🎵' },
  { id: 3, interest: 'sports', emoji: '🏀' },
  { id: 4, interest: 'outdoor activities', emoji: '🏕️' },
  { id: 5, interest: 'dancing', emoji: '💃' },
  { id: 6, interest: 'food', emoji: '🍔' },
  { id: 7, interest: 'gaming', emoji: '🎮' },
  { id: 8, interest: 'gym and fitness', emoji: '🏋️' },
  { id: 9, interest: 'art', emoji: '🎨' },
  { id: 10, interest: 'book', emoji: '📚' },
  { id: 11, interest: 'camping', emoji: '⛺' },
  { id: 12, interest: 'architecture', emoji: '🏛️' },
  { id: 13, interest: 'technology', emoji: '💻' },
  { id: 14, interest: 'movie', emoji: '🎬' },
  { id: 15, interest: 'writing', emoji: '✍️' },
  { id: 16, interest: 'cooking', emoji: '🍳' },
  { id: 17, interest: 'photography', emoji: '📸' },
  { id: 18, interest: 'college life', emoji: '🎓' },
];

function toggle(id){
    const index = props.form.interests.indexOf(id)
    if(index === -1){
        props.form.interests.push(id)
    } else {
        props.form.interests.splice(index, 1)
    }
}

function goBack() {
  router.back()
}

</script>

<template>
    <div class="pa-6 pa-md-12">
        <!-- Top Row: Back Button + Title -->
        <v-row class="align-center mb-4">
            <!-- Back Button -->
            <v-col cols="auto">
                <v-btn icon variant="text" @click="goBack">
                    <v-icon class="text-h4">mdi-arrow-left</v-icon>
                </v-btn>
            </v-col>

            <!-- Title -->
            <v-col>
            <h1 class="text-h5 text-md-h4 text-center text-md-start">
                Select your Interest
            </h1>
            </v-col>
        </v-row>

        <!-- Mood Buttons -->
        <v-row class="g-4">
            <v-col
            v-for="interest in interests"
            :key="interest.id"
            cols="6"
            md="4"
            class="d-flex justify-center"
            >
            <v-btn
                :color="form.interests.includes(interest.id) ? 'red-lighten-5' : 'grey-lighten-3'"
                class="py-2 px-2 d-flex flex-column align-center text-center"
                @click="toggle(interest.id)"
                rounded="pill"
                block
                elevation="0"
                height="60"
                style="min-width: 50%;"
                :style="form.interests.includes(interest.id) ? 'border: 1px solid #f28b82;' : 'border: 1px solid transparent;'"
            >
                <span class="text-h4">{{ interest.emoji }}</span>
                <span class="text-body-1 mt-1 text-capitalize">{{ interest.interest }}</span>
            </v-btn>
            </v-col>
        </v-row>
    </div>
</template>