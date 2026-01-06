import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
});

instance.interceptors.request.use((config) => {
  return config
});

instance.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default instance;
