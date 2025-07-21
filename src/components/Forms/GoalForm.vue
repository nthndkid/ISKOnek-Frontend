<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    form: Object
})

const router = useRouter()

const moods = [
  { id: 1, mood: 'happy', emoji: '😄' },
  { id: 2, mood: 'sad', emoji: '😢' },
  { id: 3, mood: 'excited', emoji: '🤩' },
  { id: 4, mood: 'calm', emoji: '😌' },
  { id: 5, mood: 'sleepy', emoji: '😪' },
  { id: 6, mood: 'angry', emoji: '😠' },
  { id: 7, mood: 'stressed', emoji: '😫' },
  { id: 8, mood: 'tired', emoji: '😴' },
  { id: 9, mood: 'motivated', emoji: '🔥' },
  { id: 10, mood: 'anxious', emoji: '😰' },
  { id: 11, mood: 'bored', emoji: '🥱' },
  { id: 12, mood: 'lonely', emoji: '😔' },
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
            md="2"
            class="d-flex justify-center"
            >
            <v-btn
                :color="form.moods === mood.id ? 'red-lighten-5' : 'grey-lighten-3'"
                class="py-6 px-2 d-flex flex-column align-center text-center"
                @click="form.moods = mood.id"
                rounded="lg"
                block
                stacked
                elevation="0"
                height="100"
                style="min-width: 30%;"
                :style="form.moods === mood.id ? 'border: 1px solid #f28b82;' : 'border: 1px solid transparent;'"
            >
                <span class="text-h3">{{ mood.emoji }}</span>
                <span class="text-body-1 mt-1 text-capitalize">{{ mood.mood }}</span>
            </v-btn>
            </v-col>
        </v-row>
    </div>

</template>