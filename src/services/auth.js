import axios from './api';

export const getUserById = (userId) => {
  return axios.get(`/auth/${userId}`)
    .then((res) => res.data);
}