<script setup>
import { useRouter } from 'vue-router'
import { formOptions } from '../../data/formOptions'

const { interests } = formOptions()

const props = defineProps({
    form: Object
})

const emit = defineEmits(['back'])

const router = useRouter()

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
                <v-btn icon variant="text" @click="emit('back')">
                    <v-icon class="text-h4">mdi-arrow-left</v-icon>
                </v-btn>
            </v-col>

            <!-- Title -->
            <v-col>
                <h1 class="text-h5 text-md-h4 text-center text-md-start">
                    Select your Interest
                </h1>
                <p class="text-subtitle-1 text-md-subtitle-1 text-center text-md-start mb-2">Let us know what excites you — select as many as you like.</p>
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
                        <span class="text-h6 text-sm-h5 text-md-h4">{{ interest.emoji }}</span>
                        <span class="text-body-1 mt-1 text-capitalize text-wrap white-space-normal">{{ interest.interest }}</span>
                    </v-btn>
                </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.white-space-normal {
  white-space: normal !important;
  word-wrap: break-word;
  word-break: break-word;
}

</style>