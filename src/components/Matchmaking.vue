<!-- <script setup>
import FormWizard from '../components/FormWizard.vue';
import Matchmaking from '../components/Matchmaking.vue';
import { useMatchStore } from '../stores/matchStore';
const matchStore = useMatchStore()

console.log("Form: ", matchStore.form)
console.log("Mood ID:", matchStore.form.moods)
console.log("Interests:", matchStore.form.interest)
console.log("Goal ID:", matchStore.form.goals)      
console.log("Matched User: ", matchStore.matchedUser)
</script> -->

<script setup>
import { useRouter } from 'vue-router'
import { formOptions } from '../data/formOptions'
import { computed, toRaw, ref } from 'vue'
import { useMatchStore } from '../stores/matchStore'
import { useAvatarStore } from '../stores/avatarStore'
import { useUserStore } from '../stores/userStore'

const emit = defineEmits(['back'])

const matchStore = useMatchStore()

const avatarStore = useAvatarStore()

const userStore = useUserStore()

const router = useRouter()

const props = defineProps({
    form: Object
})

// Matching Logic
const isMatching = ref(false)
const countdown = ref(30)
let interval = null

const startCountdown = () => {
  isMatching.value = true
  countdown.value = 30

  interval = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(interval)
      router.push('/matching')
    }
  }, 1000)
}

const cancelMatch = () => {
  clearInterval(interval)
  isMatching.value = false
}

const findMatch = () => {
    console.log("Form Data Being Passed:", props.form)
    matchStore.setForm({...toRaw(props.form)})
    startCountdown()
}

// Data Logic
const { moods, interests, goals } = formOptions()

// Get full mood object
const selectedMood = computed(() => {
  return moods.value.find(m => m.id === props.form.moods)
})

// Get full goal object
const selectedGoal = computed(() => {
  return goals.value.find(g => g.id === props.form.goals)
})

// Get full interest objects
const selectedInterests = computed(() => {
  return interests.value.filter(i => props.form.interests.includes(i.id))
})

</script>

<template>
    <div class="pa-6 pa-md-12">
        <!-- User -->
        <v-row class="align-center">
            <!-- Back Button
            <v-col cols="auto">
                <v-btn icon variant="text" @click="emit('back')">
                    <v-icon class="text-h4">mdi-arrow-left</v-icon>
                </v-btn>
            </v-col> -->

            <v-col class="d-flex flex-column align-center text-center">
                <!-- User Avatar -->
                <v-img
                    :src="avatarStore.avatar"
                    alt="avatar"
                    width="120"
                    height="120"
                    class="mb-2"
                    cover
                    rounded="circle"
                />

                <!-- User Name -->
                <span class="text-h6 font-weight-medium mt-2">
                    @{{ userStore.user.username }}
                </span>
            </v-col>

            <v-col class="d-flex flex-column align-center text-center">
                <!-- User Avatar -->
                <v-img
                    :src="avatarStore.avatar"
                    alt="avatar"
                    width="120"
                    height="120"
                    class="mb-2"
                    cover
                    rounded="circle"
                />

                <!-- User Name -->
                <span class="text-h6 font-weight-medium mt-2">
                    @{{ userStore.user.username }}
                </span>
            </v-col>
        </v-row>

        <!-- Tags -->
        <v-row class="justify-center">
            <v-col cols="12" md="10" class="text-center">
                <div class="d-flex flex-wrap justify-center ga-2 pa-2">
                    <!-- Mood Chip -->
                    <v-chip
                        v-if="selectedMood"
                        color="pink-darken-2"
                        class="ma-1 text-body-2 text-capitalize"
                        size="large"
                        label
                    >
                        {{ selectedMood.emoji }} {{ selectedMood.mood }}
                    </v-chip>

                    <!-- Interest Chips -->
                    <v-chip
                        v-for="interest in selectedInterests"
                        :key="interest.id"
                        color="light-blue-darken-3"
                        class="ma-1 text-body-2 text-capitalize"
                        size="large"
                        label
                    >
                        {{ interest.emoji }} {{ interest.interest }}
                    </v-chip>

                    <!-- Goal Chip -->
                    <v-chip
                        v-if="selectedGoal"
                        color="teal-darken-4"
                        class="ma-1 text-body-2 text-capitalize"
                        size="large"
                        label
                    >
                        {{ selectedGoal.emoji }} {{ selectedGoal.goal }}
                    </v-chip>
                </div>
            </v-col>
        </v-row>

        <!-- Buttons -->
        <v-row justify="center" class="px-6 px-md-12 mt-4">
            <v-col v-if="!isMatching" cols="12" md="5" class="d-flex flex-column gap-4">
                <!-- Find Match Button -->
                <v-btn
                    color="blue-accent-3"
                    size="large"
                    rounded="pill"
                    elevation="4"
                    block
                    class="mb-6 py-7 px-6 text-white hover-scale"
                    @click="findMatch"
                >
                    Find Match
                </v-btn>

                <!-- Go Back Button -->
                <v-btn
                    color="grey-lighten-3"
                    size="large"
                    rounded="pill"
                    elevation="4"
                    block
                    class="py-7 px-6 hover-scale"
                    @click="emit('back')"
                >
                    Go Back
                </v-btn>
            </v-col>

            <v-col v-else cols="12" md="5" class="d-flex flex-column align-center text-center">
                <!-- Circular Countdown -->
                <v-progress-circular
                    :model-value="(countdown / 30) * 100"
                    :rotate="360"
                    :size="100"
                    :width="8"
                    color="primary"
                >
                    <span class="text-h4 font-weight-bold text-primary">
                    {{ countdown }}
                    </span>
                </v-progress-circular>

                <span class="mt-4 text-subtitle-2 font-italic mb-4">
                    Matching in progress...
                </span>

                <!-- Cancel Button -->
                 <v-btn
                    color="red-darken-3"
                    size="large"
                    rounded="pill"
                    elevation="4"
                    block
                    class="py-7 px-6 hover-scale"
                    @click="cancelMatch"
                >
                    Cancel Match
                </v-btn>
            </v-col>
            
            <!-- Message -->
            <span v-if="!isMatching" class="text-body-2 text-center d-block mt-8">
                Ready to meet someone like you? Click <strong>Find Match</strong> to begin, or <strong>Go Back</strong> to make changes.
            </span>

            <span v-else class="text-body-2 text-center d-block mt-8">
                Searching for your perfect match... Please wait <strong>30 seconds</strong> while we queue you with someone compatible.<br>
                If you change your mind, you can <strong>Cancel</strong> anytime.
            </span>

        </v-row>
    </div>

</template>

<style scoped>
.hover-scale {
  transition: transform 0.2s ease;
}

.hover-scale:hover {
  transform: scale(1.02);
}

.v-progress-circular__overlay {
  transition: stroke-dashoffset 0.6s ease;
}
</style>
