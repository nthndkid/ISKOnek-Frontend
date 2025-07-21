<template>
  <v-card max-width="600" class="mx-auto pa-4">
    <v-card-title class="text-h6 text-center">Step {{ step }} of 3</v-card-title>

    <v-card-text>
      <div v-if="step === 1">
        <p class="text-subtitle-2 mb-4">What are you interested in? (Click all that apply)</p>
        <v-btn
          v-for="option in step1Options"
          :key="option.id"
          :color="form.interests.includes(option.id) ? 'primary' : 'grey-lighten-2'"
          class="ma-2"
          variant="tonal"
          @click="toggleMultiSelect('interests', option.id)"
        >
          {{ option.emoji }} {{ option.label }}
        </v-btn>
      </div>

      <div v-else-if="step === 2">
        <p class="text-subtitle-2 mb-4">What skills are you looking to develop?</p>
        <v-btn
          v-for="option in step2Options"
          :key="option.id"
          :color="form.skills.includes(option.id) ? 'primary' : 'grey-lighten-2'"
          class="ma-2"
          variant="tonal"
          @click="toggleMultiSelect('skills', option.id)"
        >
          {{ option.emoji }} {{ option.label }}
        </v-btn>
      </div>

      <div v-else-if="step === 3">
        <p class="text-subtitle-2 mb-4">Choose your preferred learning style</p>
        <v-btn
          v-for="option in step3Options"
          :key="option.id"
          :color="form.learningStyle === option.id ? 'primary' : 'grey-lighten-2'"
          class="ma-2"
          variant="tonal"
          @click="form.learningStyle = option.id"
        >
          {{ option.emoji }} {{ option.label }}
        </v-btn>
      </div>
    </v-card-text>

    <v-card-actions class="justify-between mt-4">
      <v-btn
        text
        @click="step--"
        :disabled="step === 1"
      >
        Back
      </v-btn>

      <v-btn
        color="primary"
        @click="step === 3 ? submit() : step++"
        :disabled="isNextDisabled"
      >
        {{ step === 3 ? 'Submit' : 'Next' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const step = ref(1)

const form = reactive({
  interests: [],
  skills: [],
  learningStyle: null
})

const step1Options = [
  { id: 'research', label: 'Research', emoji: '🔬' },
  { id: 'coding', label: 'Coding', emoji: '💻' },
  { id: 'reading', label: 'Reading', emoji: '📖' },
  { id: 'writing', label: 'Writing', emoji: '📝' }
]

const step2Options = [
  { id: 'leadership', label: 'Leadership', emoji: '👑' },
  { id: 'communication', label: 'Communication', emoji: '💬' },
  { id: 'collaboration', label: 'Teamwork', emoji: '🤝' },
  { id: 'creativity', label: 'Creativity', emoji: '🎨' }
]

const step3Options = [
  { id: 'visual', label: 'Visual Learner', emoji: '👀' },
  { id: 'auditory', label: 'Auditory Learner', emoji: '🎧' },
  { id: 'kinesthetic', label: 'Hands-On', emoji: '👐' }
]

const toggleMultiSelect = (field, id) => {
  const index = form[field].indexOf(id)
  if (index === -1) {
    form[field].push(id)
  } else {
    form[field].splice(index, 1)
  }
}

const isNextDisabled = computed(() => {
  if (step.value === 1) return form.interests.length === 0
  if (step.value === 2) return form.skills.length === 0
  if (step.value === 3) return form.learningStyle === null
  return false
})

const submit = () => {
  console.log('Form submitted:', JSON.stringify(form, null, 2))
  alert('Thank you! 🎉')
}
</script>
