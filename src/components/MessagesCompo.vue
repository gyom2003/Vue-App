<template>
  <div>
    <div v-for="message in messages" :key="message.id" style="margin-bottom: 1em;">
      <Card>
        <template #title>
          {{ message.authorId === parseInt(selectedUserId) ? 'You' : 'Other' }}
        </template>
        <p>{{ message.body }}</p>
        <p><small>{{ new Date(message.timestamp * 1000).toLocaleString() }}</small></p>
      </Card>
    </div>
    <div>
      <InputText v-model="newMessage" placeholder="Type your message"></InputText>
      <Button @click="sendMessage" label="Send"></Button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  name: 'MessagesCompo',
  components: { Card, InputText, Button },
  data() {
    return {
      messages: [],
      newMessage: '',
      selectedUserId: this.$route.params.userId,
    };
  },
  created() {
    this.fetchMessages();
  },
  methods: {
    fetchMessages() {
      // const conversationId = parseInt(this.$route.params.conversationId);
      axios.get('http://localhost:3005/messages')
        .then(response => {
          console.log("Fetched messages:", response.data);
          this.messages = response.data.filter(message => {
            console.log(message.body)
            return message.body;
          });
          console.log("Filtered messages:", this.messages);
        })
        .catch(error => {
          console.error('Error fetching messages:', error);
        });
    },
    sendMessage() {
      const conversationId = this.$route.params.conversationId;
      const newMessage = {
        conversationId,
        authorId: this.selectedUserId,
        body: this.newMessage,
        timestamp: Math.floor(Date.now() / 1000),
      };
      axios.post('http://localhost:3005/messages', newMessage).then(response => {
        this.messages.push(response.data);
        this.newMessage = '';
      });
    },
  },
};
</script>

<style>
</style>
