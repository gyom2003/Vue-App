<template>
    <div>
      <h2>Select User</h2>
      <div v-for="user in users" :key="user.id" style="margin-bottom: 1em;">
        <button @click="selectUser(user)">{{ user.nickname }}</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UserSelection',
    data() {
      return {
        users: [],
      };
    },
    created() {
      axios.get('http://localhost:3005/users').then(response => {
        this.users = response.data;
      });
    },
    methods: {
      selectUser(user) {
        this.$router.push({ name: 'conversations', params: { userId: user.id } });
      },
    },
  };
  </script>
  
  
  