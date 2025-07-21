<script setup>
import Navbar from '../components/Navbar.vue';
import { ref } from 'vue'

const friends = ref([
  { id: 1, name: 'Alex Cruz', avatar: 'https://i.pravatar.cc/32?img=1' },
  { id: 2, name: 'Jamie Lee', avatar: 'https://i.pravatar.cc/32?img=2' },
  { id: 3, name: 'Casey Tan', avatar: 'https://i.pravatar.cc/32?img=3' },
  { id: 4, name: 'Morgan Yu', avatar: 'https://i.pravatar.cc/32?img=4' },
  { id: 5, name: 'Sky Navarro', avatar: 'https://i.pravatar.cc/32?img=5' },
])

const addFriend = (user) => {
  alert(`Sent friend request to ${user.name}`)
}
</script>

<template>
  <v-container class="px-0" max-width="1400">
    <v-row class="ma-0 pa-0" align="start" justify="center">

      <v-col cols="12" md="9" class="pa-2">
        <v-sheet class="bg-blue pa-4" rounded>
          <p class="text-white">Feed content goes here</p>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="3" class="pa-2 d-none d-md-block">
        <v-sheet class="bg-red-lighten-1 pa-4" rounded height="100%">
          <h3 class="text-white mb-4">Suggestions</h3>

          <v-list
            density="compact"
            style="max-height: 500px; overflow-y: auto;"
          >
            <v-list-item
              v-for="user in friends"
              :key="user.id"
              class="d-flex align-center justify-space-between"
            >
              <div class="d-flex align-center">
                <v-avatar size="32" class="me-3">
                  <v-img :src="user.avatar" />
                </v-avatar>
                <span class="text-black">{{ user.name }}</span>
              </div>

              <v-btn size="small" variant="outlined" color="blue" @click="addFriend(user)">
                Add
              </v-btn>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

    </v-row>
  </v-container>
</template>

