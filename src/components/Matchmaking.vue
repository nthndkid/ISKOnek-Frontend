<script setup>
import FormWizard from '../components/FormWizard.vue';
import Matchmaking from '../components/Matchmaking.vue';
import { useMatchStore } from '../stores/matchStore';
const matchStore = useMatchStore()

console.log("Form: ", matchStore.form)
console.log("Mood ID:", matchStore.form.moods)
console.log("Interests:", matchStore.form.interest)
console.log("Goal ID:", matchStore.form.goals)         // logs your own form data
console.log("Matched User: ", matchStore.matchedUser)
</script>

<template>
    <h1>hello</h1>

    <pre>{{ matchStore.form }}</pre>
    <pre>{{ matchStore.matchedUser }}</pre> 
</template>