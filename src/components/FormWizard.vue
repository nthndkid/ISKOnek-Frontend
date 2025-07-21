<script setup>
import { ref, reactive, computed } from 'vue'
import MoodForm from './Forms/MoodForm.vue'

const step = ref(1)

const form = reactive({
    mood: [],
    interests: [],
    goal: null
})
</script>

<template>
        <v-card 
            max-width="1000" 
            width="100%" 
            elevation="1"
            rounded="xl"
            class="mx-auto pa-4 border border-opacity-05 border-grey-lighten-2"
        >
            <div>
                <MoodForm :form="form"/>
            </div>

            <v-row justify="center" class="mb-6 px-6 px-md-12">
                <v-col cols="12" md="12" class="text-center">
                    <v-btn 
                    color="red-accent-4" 
                    rounded="lg" 
                    size="large" 
                    block
                    @click="nextStep"
                    >
                    Next
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
</template>