import axios from 'axios';

const API = axios.create({
  baseURL: 'https://backend.fikia.io',
});

API.interceptors.request.use((req) => {
  return req;
});

export default API;