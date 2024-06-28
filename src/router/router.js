import { createRouter, createWebHistory } from 'vue-router';
import ConversationsCompo from '../components/ConversationsCompo.vue';
import MessagesCompo from '../components/MessagesCompo.vue';
import UserSelection from '../components/UserSelection.vue';

const routes = [
  { path: '/', component: UserSelection, name: 'user-selection' },
  { path: '/conversations/:userId', component: ConversationsCompo, name: 'conversations' },
  { path: '/messages/:conversationId', component: MessagesCompo, name: 'messages-compo' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
