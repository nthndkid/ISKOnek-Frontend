import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null
    }),
    actions: {
        setUser(userData) {
            this.user = this.userData
            localStorage.setItem('user', JSON.stringify(userData))
        },
        clearUser() {
            this.user = null
            localStorage.removeItem('user')
        },
        loadUser() {
            const savedUser = localStorage.getItem('user')
            
            if(savedUser) {
                this.user = JSON.parse(savedUser)
            }
        }
    }
})