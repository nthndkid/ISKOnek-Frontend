<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    form: Object
})

const emit = defineEmits(['back'])

const router = useRouter()

const goals = [
  { id: 1, goal: 'find a study partner', emoji: '📚' },
  { id: 2, goal: 'find a gaming buddy', emoji: '🎮' },
  { id: 3, goal: 'someone willing to listen', emoji: '👂' },
  { id: 4, goal: 'just want to explore', emoji: '🧭' },
  { id: 5, goal: 'collaborate on ideas or projects', emoji: '🤝' },
  { id: 6, goal: 'explore internship or career ideas', emoji: '💼' },
  { id: 7, goal: 'share academic tips/resources', emoji: '📝' },
  { id: 8, goal: 'practice public speaking or performance', emoji: '🎤' },
  { id: 9, goal: 'make new friends', emoji: '🫂' },
  { id: 10, goal: 'improve communication skills', emoji: '🗣️' },
  { id: 11, goal: 'get peer support or advice', emoji: '💬' },
  { id: 12, goal: 'network for future opportunities', emoji: '🌐' },
  { id: 13, goal: 'join or start a club/group', emoji: '🏫' },
  { id: 14, goal: 'build a startup or passion project', emoji: '🚀' }
];


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
                <v-btn icon variant="text" @click="emit('back')">
                    <v-icon class="text-h4">mdi-arrow-left</v-icon>
                </v-btn>
            </v-col>

            <!-- Title -->
            <v-col>
                <span class="text-body-1 text-md-body-1 d-block mx-auto text-start">
                    Let’s Get You Matched
                </span>

                <h1 class="text-h5 text-md-h4 text-start my-4">
                    What’s Your Goal?
                </h1>

                <span class="text-body-2 text-md-body-2 d-block mx-auto text-start">
                    This helps us match you with people who share your vibe.
                </span>
            </v-col>
        </v-row>

        <!-- Mood Buttons -->
        <v-row class="g-4">
            <v-col
            v-for="goal in goals"
            :key="goal.id"
            cols="6"
            md="6"
            class="d-flex justify-center"
            >
            <v-btn
                :color="form.goals === goal.id ? 'red-lighten-5' : 'grey-lighten-3'"
                class="py-6 px-2 d-flex flex-column align-center text-center"
                @click="form.goals = goal.id"
                rounded="xl"
                block
                elevation="0"
                height="40"
                style="min-width: 30%;"
                :style="form.goals === goal.id ? 'border: 1px solid #f28b82;' : 'border: 1px solid transparent;'"
            >
                <span class="text-h6">{{ goal.emoji }}</span>
                <span class="text-body-1 mt-1 text-capitalize">{{ goal.goal }}</span>
            </v-btn>
            </v-col>
        </v-row>
    </div>

</template>