import apiClient from './ApiServices';

const messageService =  {
  getMessages() {
    return apiClient.get('/messages');
  },
};

export default messageService;