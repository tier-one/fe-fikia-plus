import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
});

API.interceptors.request.use((req) => {
  return req;
});

export default API;