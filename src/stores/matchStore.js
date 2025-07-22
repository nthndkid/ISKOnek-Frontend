import { defineStore, setMapStoreSuffix } from "pinia";

export const useMatchStore = defineStore('match', {
    state: () => ({
        // store currentUser form data
        form: {
            moods: null,
            interest: [],
            goals: null
        },
        // store matchedUser form data
        matchedUser: null
    }),
    actions: {
        setForm(data) {
            this.form = data
        },
        setMatchedUser(user) {
            this.matchedUser = user
        },
        reset() {
            this.form = { moods: null, interests: [], goals: null }
            this.matchedUser = null
        }
    }
})