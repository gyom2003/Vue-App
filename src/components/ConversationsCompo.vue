<template>
  <div>
    <div v-for="user in users" :key="user.id" style="margin-bottom: 1em;">
      <Button @click="selectUser(user)" :label="user.nickname"></Button>
    </div>
   
    <div v-if="selectedUser">
      <h2>Conversations for {{ selectedUser.nickname }}</h2>
      <div v-for="conversation in filteredConversations" :key="conversation.id" class="conversation-item">
        <h3>{{ conversation.senderNickname }} - {{ conversation.recipientNickname }}</h3>
        <p>{{ new Date(conversation.lastMessageTimestamp * 1000).toLocaleString() }}</p>
        <button @click="selectConversation(conversation)">Select Conversation</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Button from 'primevue/button';
import conversationsData from '@/assets/conversations.json';

export default {
  name: 'ConversationsCompo',
  components: { Button },
  data() {
    return {
      users: [],
      conversations: conversationsData.conversations, 
      selectedUser: null,
    };
  },
  computed: {
    filteredConversations() {
      if (!this.selectedUser) {
        return [];
      }
      return this.conversations.filter(
        c => c.senderId === this.selectedUser.id || c.recipientId === this.selectedUser.id
      );
    },
  },
  created() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      axios.get('http://localhost:3005/users')
        .then(response => {
          this.users = response.data;
          console.log('Users loaded:', this.users);
        })
        .catch(error => {
          console.error('Error loading users:', error);
        });
    },
    selectUser(user) {
      this.selectedUser = user;
      console.log('Selected user:', this.selectedUser);
    },
    selectConversation(conversation) {
      this.$emit('select-conversation', conversation);
      const conversationId = conversation.id;
      console.log(conversation.id)
      if (conversationId === 1) {
        this.$router.push({ name: 'messages', params: { conversationId: 1, userId: this.selectedUser.id } });
      } else if (conversationId === 2) {
        this.$router.push({ name: 'messages', params: { conversationId: 4, userId: this.selectedUser.id } });
      } else {
        console.log('No valid conversation ID for redirection');
      }
    },
  },
};
</script>

<style>
.conversation-item {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>
