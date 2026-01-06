import axios from 'axios';

const instance = axios.create({});

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
