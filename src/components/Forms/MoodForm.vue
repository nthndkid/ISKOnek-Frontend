<script setup>
import { capitalize } from 'vue';
import { useRouter } from 'vue-router'

const props = defineProps({
    form: Object
})

const router = useRouter()

const moods = [
  { id: 1, mood: 'happy', emoji: '😄' },
  { id: 2, mood: 'sad', emoji: '😢' },
  { id: 3, mood: 'motivated', emoji: '🔥' },
  { id: 4, mood: 'tired', emoji: '😴' },
  { id: 5, mood: 'anxious', emoji: '😰' },
  { id: 6, mood: 'focused', emoji: '🎯' },
  { id: 7, mood: 'excited', emoji: '🤩' },
  { id: 8, mood: 'frustrated', emoji: '😤' }
];


function toggle(id){
    const index = props.form.moods.indexOf(id)
    if(index === -1){
        props.form.moods.push(id)
    } else {
        props.form.moods.splice(index, 1)
    }
}

function goBack() {
  router.back()
}

</script>

<template>
    <div class="pa-6 pa-md-12">
        <!-- Top Row: Back Button + Title -->
        <v-row class="align-center mb-6">
            <!-- Back Button -->
            <v-col cols="auto">
                <v-btn icon variant="text" @click="goBack">
                    <v-icon class="text-h4">mdi-arrow-left</v-icon>
                </v-btn>
            </v-col>

            <!-- Title -->
            <v-col>
            <h1 class="text-h5 text-md-h4 text-center text-md-start">
                What is your mood today?
            </h1>
            </v-col>
        </v-row>

        <!-- Mood Buttons -->
        <v-row class="g-4">
            <v-col
            v-for="mood in moods"
            :key="mood.id"
            cols="6"
            md="3"
            class="d-flex justify-center"
            >
            <v-btn
                :color="form.mood.includes(mood.id) ? 'red-accent-4' : 'grey-lighten-3'"
                class="py-6 px-2 d-flex flex-column align-center text-center"
                @click="toggle(mood.id)"
                rounded="lg"
                block
                stacked
                elevation="0"
                height="120"
                style="min-width: 60%"
            >
                <span class="text-h3">{{ mood.emoji }}</span>
                <span class="text-h6 mt-1 text-capitalize">{{ mood.mood }}</span>
            </v-btn>
            </v-col>
        </v-row>
    </div>

</template>