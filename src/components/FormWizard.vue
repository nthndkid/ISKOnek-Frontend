<script setup>
import { ref, reactive, computed } from 'vue'
import MoodForm from './Forms/MoodForm.vue'
import InterestForm from './Forms/InterestForm.vue'

const step = ref(1)

const form = reactive({
    mood: null,
    interests: [],
    goal: null
})
</script>

<template>
        <v-card 
            max-width="950" 
            width="100%" 
            elevation="1"
            rounded="xl"
            class="mx-auto py-6 px-4 border border-opacity-05 border-grey-lighten-2"
        >
            <div v-if="step === 1">
                <MoodForm :form="form"/>
            </div>

            <div v-else-if="step === 2">
                <InterestForm :form="form"/>
            </div>

            <v-row justify="center" class="mb-6 px-6 px-md-12">
                <v-col cols="12" md="12" class="text-center">
                    <v-btn 
                        color="red-darken-3" 
                        rounded="lg" 
                        size="large" 
                        block
                        @click="step === 3 ? submit() : step++"
                    >   
                        {{ step === 3 ? 'Submit' : 'Next' }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
</template>