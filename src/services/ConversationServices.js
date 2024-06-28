import apiClient from './ApiServices';

const conversationService = {
  getConversations() {
    return apiClient.get('/conversations');
  },
};

export default conversationService;
