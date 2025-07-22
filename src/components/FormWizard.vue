<script setup>
import { ref, reactive, computed } from 'vue'
import MoodForm from './Forms/MoodForm.vue'
import InterestForm from './Forms/InterestForm.vue'
import GoalForm from './Forms/GoalForm.vue'
import MatchPreview from './Forms/MatchPreview.vue'

const step = ref(1)

const form = reactive({
    moods: null,
    interests: [],
    goals: null
})

const isNextDisabled = computed(() => {
  if (step.value === 1) return form.moods === null
  if (step.value === 2) return form.interests.length === 0
  if (step.value === 3) return form.goals === null
  return false
})

const submitForm = () => {
  // 1. Save to localStorage (mock)
//   localStorage.setItem('userPreferences', JSON.stringify(form))

  // 2. Optional: Send to API
  // await axios.post('/api/match', form)

  // 3. Navigate to match-finding screen
  router.push('/find-match')
}
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
                <InterestForm :form="form" @back="step--"/>
            </div>

            <div v-else-if="step === 3">
                <GoalForm :form="form" @back="step--"/>
            </div>

            <div v-else-if="step === 4">
                <MatchPreview :form="form" @back="step--"/>
            </div>

            <v-row v-if="step < 4" justify="center" class="mb-6 px-6 px-md-12">
                <v-col cols="12" md="12" class="text-center">
                    <v-btn 
                        color="red-darken-3" 
                        rounded="lg" 
                        size="large" 
                        block
                        @click="step === 4 ? submitForm() : step++"
                        :disabled="isNextDisabled"
                    >   
                        {{ step === 4 ? 'Find Match' : 'Next' }}
                    </v-btn>
                </v-col>    
            </v-row>
        </v-card>
</template>