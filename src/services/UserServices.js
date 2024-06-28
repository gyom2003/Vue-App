import apiClient from './ApiServices';

const userServices =  {
  getUsers() {
    return apiClient.get('/users');
  },
};

export default userServices;