<template>
  <teleport to="body">
    <div v-if="loading" class="loading-overlay">
      <div class="loading-content">
        <v-progress-circular
          indeterminate
          size="64"
          width="8"
          color="red"
          class="mb-4"
        />
        <div class="text-h6 font-weight-semibold text-white">
          {{ message }}
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
defineProps({
  loading: Boolean,
  message: {
    type: String,
    default: 'Loading...'
  }
})
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-content {
  text-align: center;
  margin-bottom: 7rem;
}
</style>
