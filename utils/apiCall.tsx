import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

API.interceptors.request.use((req) => {
  return req;
});

export default API;