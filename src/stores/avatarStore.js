import { defineStore } from 'pinia'

export const useAvatarStore = defineStore('avatar', {
  state: () => ({
    avatar: null
  }),
  actions: {
    setAvatar(dataUri) {
      this.avatar = dataUri
      localStorage.setItem('avatar', dataUri)
    },
    clearAvatar() {
      this.avatar = null
      localStorage.removeItem('avatar')
    },
    loadAvatar() {
      const saved = localStorage.getItem('avatar')
      if (saved) {
        this.avatar = saved
      }
    }
  }
})