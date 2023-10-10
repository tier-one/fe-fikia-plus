import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:5000',
});

API.interceptors.request.use((req) => {
  return req;
});

export default API;