<template>
  <v-container>
    <h2>Utilisateurs</h2>
    <v-list>
      <v-list-item v-for="user in users" :key="user.id">
        <v-list-item-content>
          <v-list-item-title>{{ user.nickname }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'users-compo',
  data() {
    return {
      users: [],
    };
  },
  created() {
    axios.get('http://localhost:3005/users')
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  },
};
</script>
