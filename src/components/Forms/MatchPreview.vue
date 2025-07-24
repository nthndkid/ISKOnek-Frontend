<script setup>
import { useRouter } from 'vue-router'
import { formOptions } from '../../data/formOptions'
import { computed, toRaw } from 'vue'
import { useMatchStore } from '../../stores/matchStore'
import { useAvatarStore } from '../../stores/avatarStore'
import { useUserStore } from '../../stores/userStore'

const emit = defineEmits(['back'])

const store = useMatchStore()

const avatarStore = useAvatarStore()

const userStore = useUserStore()

const router = useRouter()

const props = defineProps({
    form: Object
})

const findMatch = () => {
    console.log("Form Data Being Passed:", props.form)
    store.setForm({...toRaw(props.form)})
    router.push('/matching')
}

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


const user = {
  name: '@iskoako',
  avatar: 'https://api.dicebear.com/9.x/dylan/svg?seed=Felix'
}
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
        <v-row justify="center" class="px-6 px-md-12 mt-8">
            <v-col cols="12" md="5" class="d-flex flex-column gap-4">
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

            <span class="text-body-2 text-center d-block mt-8">
                    Ready to meet someone like you? Click <strong>Find Match</strong> to begin, or <strong>Go Back</strong> to make changes.
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
</style>
